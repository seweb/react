import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('render title', () => {
    render(<App />);
    expect(screen.getByTestId('title')).toBeInTheDocument();
  });
});
