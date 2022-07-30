import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Sidebar from '../Sidebar';

function renderComponent() {
	return (
		<Router>
			<Sidebar />
		</Router>
	);
}

describe('Sidebar component', () => {
	test('Sidebar renders', () => {
		render(renderComponent());
		expect(screen.getByRole('sidebar')).toBeInTheDocument();
		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	test('Sidebar displays correct logo img', () => {
		render(renderComponent());
		expect(screen.getByRole('logo')).toHaveAttribute('src', 'logo.svg');
		expect(screen.getByRole('logo')).toHaveAttribute('alt', 'Кортекс');
	});

  test('Sidebar renders userblock element', () => {
    render(renderComponent());
    expect(screen.getByRole('userblock')).toBeInTheDocument();
  });

  test('Sidebar userblock displays correct img', () => {
		render(renderComponent());
		expect(screen.getByRole('avatar')).toHaveAttribute('src', 'avatar-default.svg');
	});
});
