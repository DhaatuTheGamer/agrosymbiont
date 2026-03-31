import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import JobBadge from './JobBadge';

describe('JobBadge', () => {
    it('renders icon and text correctly', () => {
        render(<JobBadge icon="📍" text="Remote" />);
        expect(screen.getByText('📍')).toBeInTheDocument();
        expect(screen.getByText(/Remote/)).toBeInTheDocument();
    });

    it('appends className correctly', () => {
        const { container } = render(<JobBadge icon="💼" text="Full-time" className="test-class" />);
        const spanElement = container.firstChild as HTMLElement;
        expect(spanElement).toHaveClass('test-class');
        expect(spanElement).toHaveClass('flex items-center bg-stone-50');
    });

    it('handles empty className gracefully', () => {
         const { container } = render(<JobBadge icon="💼" text="Full-time" />);
         const spanElement = container.firstChild as HTMLElement;
         expect(spanElement.className).not.toMatch(/\s$/);
    });
});
