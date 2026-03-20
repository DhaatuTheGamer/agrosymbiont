import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import JobApplicationForm from './JobApplicationForm';

const enTranslations: { [key: string]: string } = {
  'car_form_name': 'Full Name',
  'car_form_email': 'Email Address',
  'car_form_linkedin': 'LinkedIn Profile Link',
  'car_form_resume': 'Resume/CV',
  'car_form_upload': 'Upload a file',
  'car_form_selected': 'Selected: ',
  'car_form_resume_required': 'Please upload your Resume/CV.',
  'car_form_success_title': 'Application Received!',
  'car_form_success_desc': "Thank you for your interest in AgroSymbiont. We'll be in touch.",
  'car_form_submit': 'Submit Application'
};

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => enTranslations[key] || key
  })
}));

vi.mock('lucide-react', () => ({
  AlertCircle: () => <span data-testid="alert-circle">AlertCircle</span>,
  UploadCloud: () => <span data-testid="upload-cloud">UploadCloud</span>,
  Loader2: () => <span data-testid="loader">Loader2</span>
}));

describe('JobApplicationForm Component', () => {
  it('should successfully select a file', () => {
    render(<JobApplicationForm />);

    // Use the name attribute to find the input since the label is not directly linked via aria
    const fileInput = document.querySelector('input[name="resume"]') as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    const file = new File(['dummy content'], 'resume.pdf', { type: 'application/pdf' });
    fireEvent.change(fileInput, { target: { name: 'resume', files: [file] } });

    expect(screen.getByText('Selected: resume.pdf')).toBeInTheDocument();
  });

  it('should display validation error when submitting without a resume', () => {
    render(<JobApplicationForm />);

    const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
    const linkedinInput = document.querySelector('input[name="linkedin"]') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { name: 'name', value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'test@example.com' } });
    fireEvent.change(linkedinInput, { target: { name: 'linkedin', value: 'https://linkedin.com/in/johndoe' } });

    const submitBtn = screen.getByText('Submit Application');
    fireEvent.click(submitBtn);

    expect(screen.getAllByText('Please upload your Resume/CV.')).not.toHaveLength(0);
  });

  it('should successfully submit the form with a resume', async () => {
    const onSuccessMock = vi.fn();
    render(<JobApplicationForm onSuccess={onSuccessMock} />);

    const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
    const linkedinInput = document.querySelector('input[name="linkedin"]') as HTMLInputElement;
    const fileInput = document.querySelector('input[name="resume"]') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { name: 'name', value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'test@example.com' } });
    fireEvent.change(linkedinInput, { target: { name: 'linkedin', value: 'https://linkedin.com/in/johndoe' } });

    const file = new File(['dummy content'], 'resume.pdf', { type: 'application/pdf' });
    fireEvent.change(fileInput, { target: { name: 'resume', files: [file] } });

    const submitBtn = screen.getByText('Submit Application');
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Application Received!')).toBeInTheDocument();
      expect(screen.getByText("Thank you for your interest in AgroSymbiont. We'll be in touch.")).toBeInTheDocument();
    }, { timeout: 2000 }); // Increase timeout since API call simulated is 1500ms
  });
});
