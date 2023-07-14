import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders About link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

});
