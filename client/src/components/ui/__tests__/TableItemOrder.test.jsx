import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableItemOrder from '../TableItemOrder';

const order = {
	id: '1',
	order_key: 'B123-123',
	product_name: 'Часы',
	image: '/products/image.png',
	price: 100,
	quantity: 10,
	order_date: new Date(),
	order_status: 'Отклонено',
};

describe('TableItemOrder component', () => {
	test('TableItemOrder renders', () => {
		render(<TableItemOrder order={order} />);
		expect(screen.getByRole('tableitem')).toBeInTheDocument();
	});

	test('TableItemOrder renders corrent value (Пришло) under corresponding order_status tag', () => {
		order.order_status = 'Пришло'
    render(<TableItemOrder order={order} />);
		expect(screen.getByText('Пришло')).toBeInTheDocument();
	});

	test('TableItemOrder renders corrent value (В пути) under corresponding order_status tag', () => {
		order.order_status = 'В пути'
    render(<TableItemOrder order={order} />);
		expect(screen.getByText('В пути')).toBeInTheDocument();
	});

	test('TableItemOrder renders corrent value (Ожидает оплаты) under corresponding order_status tag', () => {
		order.order_status = 'Ожидает оплаты'
    render(<TableItemOrder order={order} />);
		expect(screen.getByText('Ожидает оплаты')).toBeInTheDocument();
	});

	test('TableItemOrder renders corrent value (Отклонено) under corresponding order_status tag', () => {
    render(<TableItemOrder order={order} />);
		expect(screen.getByText('Отклонено')).toBeInTheDocument();
	});
});
