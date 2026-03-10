import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import TiltCard from './TiltCard';

// Mock framer-motion hooks to test the math without relying on actual framer-motion animations
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual as any,
    useMotionValue: vi.fn(),
    useSpring: vi.fn((val) => val),
    useTransform: vi.fn((val) => val),
    useReducedMotion: vi.fn(() => false),
    motion: {
      div: React.forwardRef(({ children, onMouseMove, onMouseLeave, className, "data-testid": dataTestId, style }: any, ref: any) => (
        <div
          ref={ref}
          data-testid={dataTestId || "tilt-card-motion"}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className={className}
          style={style as any}
        >
          {children}
        </div>
      ))
    }
  };
});

import { useMotionValue, useReducedMotion } from 'framer-motion';

describe('TiltCard', () => {
  let mockSetX: ReturnType<typeof vi.fn>;
  let mockSetY: ReturnType<typeof vi.fn>;
  let mockSetGlare: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockSetX = vi.fn();
    mockSetY = vi.fn();
    mockSetGlare = vi.fn();

    let callCount = 0;
    (useMotionValue as unknown as ReturnType<typeof vi.fn>).mockImplementation(() => {
      callCount++;
      if (callCount === 1) return { set: mockSetX, get: vi.fn() }; // x
      if (callCount === 2) return { set: mockSetY, get: vi.fn() }; // y
      return { set: mockSetGlare, get: vi.fn() }; // glareOpacity
    });

    (useReducedMotion as unknown as ReturnType<typeof vi.fn>).mockImplementation(() => false);
  });

  it('renders children correctly', () => {
    render(<TiltCard><div>Test Content</div></TiltCard>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('calculates correct percentages on mouse move', () => {
    render(<TiltCard><div>Content</div></TiltCard>);

    const cards = screen.getAllByTestId('tilt-card-motion');
    const card = cards[0]; // The outer div

    // Mock getBoundingClientRect
    Object.defineProperty(card, 'getBoundingClientRect', {
      configurable: true,
      value: vi.fn(() => ({
        left: 100,
        top: 100,
        width: 200,
        height: 200,
      }))
    });

    // Simulate mouse move to the center of the card
    // clientX = 200 (100 + 100), clientY = 200 (100 + 100)
    // xPct = (200 - 100) / 200 - 0.5 = 100 / 200 - 0.5 = 0
    // yPct = (200 - 100) / 200 - 0.5 = 100 / 200 - 0.5 = 0
    fireEvent.mouseMove(card, { clientX: 200, clientY: 200 });

    expect(mockSetX).toHaveBeenCalledWith(0);
    expect(mockSetY).toHaveBeenCalledWith(0);
    expect(mockSetGlare).toHaveBeenCalledWith(0.15);

    // Simulate mouse move to bottom right corner
    // clientX = 300 (100 + 200), clientY = 300 (100 + 200)
    // xPct = (300 - 100) / 200 - 0.5 = 200 / 200 - 0.5 = 0.5
    // yPct = (300 - 100) / 200 - 0.5 = 200 / 200 - 0.5 = 0.5
    fireEvent.mouseMove(card, { clientX: 300, clientY: 300 });

    expect(mockSetX).toHaveBeenCalledWith(0.5);
    expect(mockSetY).toHaveBeenCalledWith(0.5);
    expect(mockSetGlare).toHaveBeenCalledWith(0.15);
  });

  it('resets values on mouse leave', () => {
    render(<TiltCard><div>Content</div></TiltCard>);

    const cards = screen.getAllByTestId('tilt-card-motion');
    const card = cards[0]; // The outer div
    fireEvent.mouseLeave(card);

    expect(mockSetX).toHaveBeenCalledWith(0);
    expect(mockSetY).toHaveBeenCalledWith(0);
    expect(mockSetGlare).toHaveBeenCalledWith(0);
  });

  it('respects reduced motion settings', () => {
    (useReducedMotion as unknown as ReturnType<typeof vi.fn>).mockReturnValue(true);

    render(<TiltCard><div>Content</div></TiltCard>);

    // Should render a standard div without motion props
    expect(screen.queryByTestId('tilt-card-motion')).not.toBeInTheDocument();

    // The content is still there, but in a plain div
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
