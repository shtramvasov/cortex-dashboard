import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import ProductForm from '../ProductForm';
import { act } from 'react-dom/test-utils';

const data = {
	name: 'Товар',
	description: 'Описание',
	price: 100,
	quantity: 10
};

function renderComponent() {
	return (
		<Router>
			<ProductForm product={data} />
		</Router>
	);
}

describe('ProductForm component', () => {
  test('ProductForm renders', () => {
     render(renderComponent());
     expect(screen.getByRole('productform')).toBeInTheDocument();
  });

  test('ProductForm passes valid values', async () => {
		render(renderComponent());
		const name = screen.getByRole('name');
		const description = screen.getByRole('description');
		const price = screen.getByRole('price');
		const quantity = screen.getByRole('quantity');
		const button = screen.getByRole('button');

		await act(async () => {
			fireEvent.change(name, { target: { value: 'Товар' } });
			fireEvent.change(description, { target: { value: 'Описание' } });
			fireEvent.change(price, { target: { value: 100 } });
			fireEvent.change(quantity, { target: { value: 10 } });
		});

		await act(async () => {
			fireEvent.submit(button);
		});

		expect(name).toHaveValue('Товар');
		expect(description).toHaveValue('Описание');
		expect(price).toHaveValue(100);
		expect(quantity).toHaveValue(10);
	});

  test('ProductForm not passes name value', async () => {
		render(renderComponent());
		const name = screen.getByRole('name');
    const button = screen.getByRole('button');

		await act(async () => {
			fireEvent.change(name, { target: { value: '' } });
		});

		await act(async () => {
			fireEvent.submit(button);
		});

		expect(name).toHaveValue('');
    expect(screen.getByText('Введите название товара')).toBeInTheDocument();
	});

  test('ProductForm not passes price value', async () => {
		render(renderComponent());
		const price = screen.getByRole('price');
		const button = screen.getByRole('button');

		await act(async () => {
			fireEvent.change(price, { target: { value: null } });
		});

		await act(async () => {
			fireEvent.submit(button);
		});

		expect(price).toHaveValue(null);
		expect(screen.getByText('Введите название товара')).toBeInTheDocument();
	});

  test('ProductForm not passes quantity value', async () => {
		render(renderComponent());
		const quantity = screen.getByRole('quantity');
		const button = screen.getByRole('button');

		await act(async () => {
			fireEvent.change(quantity, { target: { value: null } });
		});

		await act(async () => {
			fireEvent.submit(button);
		});

		expect(quantity).toHaveValue(null);
		expect(screen.getByText('Введите количество товара')).toBeInTheDocument();
	});
});
