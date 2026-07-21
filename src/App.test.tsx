import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('STUDIO LINEA Marketing Website Smoke Tests', () => {
  it('renders application brand logo elements without errors', () => {
    render(<App />);
    // Verify that the brand logo is in the DOM
    expect(screen.getByText(/STUDIO/i)).toBeInTheDocument();
    expect(screen.getByText(/LINEA/i)).toBeInTheDocument();
  });

  it('renders header menu items correctly', () => {
    render(<App />);
    // Verify essential navigation routes are available in header
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Sustainability/i)).toBeInTheDocument();
    expect(screen.getByText(/Work with us/i)).toBeInTheDocument();
  });

  it('renders footer contents including address', () => {
    render(<App />);
    // Verify company contact email exists
    expect(screen.getByText(/info@studiolinea.design/i)).toBeInTheDocument();
  });
});
