import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServicesPage from '../pages/ServicesPage';
import { vi, describe, it, expect } from 'vitest';

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock framer-motion AnimatePresence and layout elements if used by children
vi.mock('framer-motion', async () => {
    const actual = await vi.importActual('framer-motion') as any;
    return {
      ...actual,
      AnimatePresence: ({ children }: any) => <>{children}</>,
    };
});

// Mock custom animated components to bypass intersection observer/framer motion logic
vi.mock( '../components/AnimatedSection', () => ({
    default: ({ children, className }: any) => <div className={`animated-section-mock ${className || ''}`}>{children}</div>
}));

vi.mock( '../components/TiltCard', () => ({
    default: ({ children, className }: any) => <div className={`tilt-card-mock ${className || ''}`}>{children}</div>
}));

describe('ServicesPage Benchmark', () => {
  it('measures time to render actual content', async () => {
    const start = performance.now();
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('tech_service_1_title')).toBeInTheDocument();
    }, { timeout: 3000 });
    const end = performance.now();
    console.log(`Time to content: ${end - start} ms`);
  });
});
