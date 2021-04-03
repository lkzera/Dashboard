import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

it('Deve renderizar o componente sem erros', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
