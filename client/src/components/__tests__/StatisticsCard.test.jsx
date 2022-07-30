import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatisticsCard from '../StatisticsCard';

const props = {
  title: 'Заказы',
  timePeriod: 10,
  timeComparison: 20,
  currentValue: 30,
  dynamicsValue: 40
}

describe('StatisticsCard component', () => {
  test('StatisticsCard renders', () => {
    render(<StatisticsCard {...props}/>)
    expect(screen.getByRole('itemcard')).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.currentValue)).toBeInTheDocument();
  });

  test('StatisticsCard renders growthIcon img on change is greater than 0', () => {
    render(<StatisticsCard {...props} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'Icon-growth.svg');
  });
});