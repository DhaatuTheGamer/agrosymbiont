import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import BackToTopButton from './BackToTopButton';

describe('BackToTopButton Component', () => {
  beforeEach(() => {
    // Reset window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });

    // Mock window.scrollTo
    window.scrollTo = vi.fn();

    vi.clearAllMocks();
  });

  it('renders correctly initially, hidden', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /scroll back to top/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('pointer-events-none');
  });

  it('becomes visible when scrolling past 300px', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /scroll back to top/i });

    // Mock scroll event where scrollY > 300
    Object.defineProperty(window, 'scrollY', { value: 301, writable: true });
    fireEvent.scroll(window);

    expect(button).toHaveClass('opacity-100');
    expect(button).not.toHaveClass('pointer-events-none');
    expect(button).not.toHaveClass('opacity-0');
  });

  it('hides again when scrolling back up', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /scroll back to top/i });

    // Scroll down
    Object.defineProperty(window, 'scrollY', { value: 301, writable: true });
    fireEvent.scroll(window);

    // Scroll back up
    Object.defineProperty(window, 'scrollY', { value: 299, writable: true });
    fireEvent.scroll(window);

    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('pointer-events-none');
    expect(button).not.toHaveClass('opacity-100');
  });

  it('calls window.scrollTo when clicked', () => {
    render(<BackToTopButton />);
    const button = screen.getByRole('button', { name: /scroll back to top/i });

    // Button needs to be interactable, though RTL doesn't strictly care about pointer-events-none for fireEvent
    // Let's make it visible just to be realistic
    Object.defineProperty(window, 'scrollY', { value: 301, writable: true });
    fireEvent.scroll(window);

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
