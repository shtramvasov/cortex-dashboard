import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableHead from '../TableHead';

const data = {
	headers: ['#', 'Товар', 'Стоимость', 'Количество', 'Дата', 'Статус заказа'],
  deleteButton: Boolean
};

describe('TableHead component', () => {
	test('TableHead renders', () => {
		render(<TableHead headers={data.headers} />);
		expect(screen.getByRole('list')).toBeInTheDocument();
		expect(screen.getByText(/Товар/)).toBeInTheDocument();
	});

  test('TableHead render correct number of cols for Button element', () => {
    render(<TableHead headers={data.headers} deleteButton={true} />);
    const listitems = screen.getAllByRole('listitem').length;
    expect(listitems).toBeGreaterThan(data.headers.length);
  });

  test('TableHead render correct number of cols without Button element', () => {
    render(<TableHead headers={data.headers} deleteButton={false} />);
    const listitems = screen.getAllByRole('listitem').length;
    expect(listitems).toEqual(data.headers.length);
  });
});
