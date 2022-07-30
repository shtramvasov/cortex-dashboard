import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import TableItemProduct from '../TableItemProduct';

const product = {
	id: '1',
	name: 'Часы',
	image: '/products/image.png',
	price: 100,
	quantity: 10,
};

const onClick = jest.fn();

function renderComponent() {
  return (
		<Router>
			<TableItemProduct product={product} />
		</Router>
	);  		
}

describe('TableItemProduct component', () => {
  test('TableItemProduct renders', () => {
    render(renderComponent());
    expect(screen.getByRole('tableitem')).toBeInTheDocument();
  });

  test('TableItemProduct renders image', () => {
    render(renderComponent());
    expect(screen.getByRole('img')).toHaveAttribute('src', product.image);
   expect(screen.getByRole('img')).toHaveAttribute('alt', product.name);
  });

  test('TableItemProduct button click works', () => {
		render(renderComponent());
    const button = screen.getByRole('button');
    fireEvent.click(button);
	});

});