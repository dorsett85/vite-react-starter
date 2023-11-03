import { render, screen } from '@testing-library/react';
import App from './App.tsx';
import { userEvent } from '@testing-library/user-event';

describe('test App', () => {
  it('renders with content', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Vite + React' })).toBeVisible();
  });

  it('increments counter', async () => {
    render(<App />);

    expect(screen.getByText('count is: 0'));

    const button = screen.getByRole('button', { name: 'Increment' });
    await userEvent.click(button);

    expect(screen.getByText('count is: 1'));
  });
});
