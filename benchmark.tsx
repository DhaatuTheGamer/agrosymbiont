import 'jsdom-global/register.js';
import React, { Profiler } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { act } from '@testing-library/react';

import BlogPostPage from './pages/BlogPostPage.tsx';

let renderCount = 0;

const onRender = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  renderCount++;
  console.log(`Render ${renderCount}: ${actualDuration}ms (${phase} phase)`);
};

// We need to mock window.matchMedia since it doesn't exist in JSDOM
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated
    removeListener: () => {}, // Deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Since Framer motion uses RequestAnimationFrame
window.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// jsdom addEventListener complains about the `signal` option.
const originalAddEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function(type, listener, options) {
  if (options && typeof options === 'object' && 'signal' in options) {
    const { signal, ...rest } = options;
    return originalAddEventListener.call(this, type, listener, rest);
  }
  return originalAddEventListener.call(this, type, listener, options);
};

async function run() {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const root = createRoot(container);

  console.log("Starting initial render...");
  await act(async () => {
    root.render(
      <Profiler id="BlogPostPage" onRender={onRender}>
        <MemoryRouter initialEntries={['/blog/nanotech-in-soil']}>
          <Routes>
            <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>
        </MemoryRouter>
      </Profiler>
    );
  });

  // Give it a tiny bit of time for any useEffects to finish
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 50));
  });

  console.log(`\nTotal renders: ${renderCount}`);

  const title = document.title;
  console.log(`Document title updated to: ${title}`);

  const postElement = container.querySelector('h1');
  if (postElement) {
    console.log(`Rendered post title: ${postElement.textContent}`);
  }
}

run().catch(console.error);
