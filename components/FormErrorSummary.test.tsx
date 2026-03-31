import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormErrorSummary from './FormErrorSummary';

describe('FormErrorSummary', () => {
    it('returns null when there are no errors', () => {
        const { container } = render(<FormErrorSummary errors={{}} headerText="Error" />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders the header and list of errors', () => {
        const errors = {
            name: 'Name is required',
            email: 'Email is invalid'
        };
        render(<FormErrorSummary errors={errors} headerText="Please fix errors:" />);

        expect(screen.getByText('Please fix errors:')).toBeInTheDocument();
        expect(screen.getByText('Name is required')).toBeInTheDocument();
        expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    });
});
