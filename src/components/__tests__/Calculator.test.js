import { cleanup, render, screen } from '@testing-library/react';

import Calculator from '../Calculator';

afterEach(() => {
  cleanup();
});

describe('render calculator and its buttons', () => {
  test('should render the calculator', () => {
    render(<Calculator />);
    const container = screen.getByText('AC');
    expect(container).toBeInTheDocument();
  });

  test('should contain the AC button', () => {
    render(<Calculator />);
    const button = screen.getByText('AC');
    expect(button).toContainHTML('<button type="button">AC</button>');
  });

  test('should contain any number generated from the loop', () => {
    render(<Calculator />);
    const container = screen.getByText('8');
    expect(container).toContainHTML('<button type="button">8</button>');
  });
});
