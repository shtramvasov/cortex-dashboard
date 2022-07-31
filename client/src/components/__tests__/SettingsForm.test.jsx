import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import SettingsForm from '../SettingsForm';
import { act } from 'react-dom/test-utils';

function renderComponent() {
	return (
		<Router>
			<SettingsForm />
		</Router>
	);
}

describe('SettingsForm component', () => {
  test('SettingsForm renders', () => {
    render(renderComponent());
    expect(screen.getByRole('settingform')).toBeInTheDocument();
  });

  test('SettingsForm avatar renders and displays correct img', () => {
    render(renderComponent());
    expect(screen.getByRole('avatar')).toHaveAttribute('src', 'avatar-default.svg');
  });
  
  test('SettingsForm form passes valid password and user values', async () => {
    render(renderComponent())
    const password = screen.getByRole('password');
    const button = screen.getByRole('button')
    const username = screen.getByRole('username')

    await act(async () => {
      fireEvent.change(password, { target: { value: '1234' }});
      fireEvent.change(username, { target: { value: 'cortex' } });
    });

    await act(async () => {
      fireEvent.submit(button);
    });

    expect(password).toHaveValue('1234');
    expect(username).toHaveValue('cortex');
  });
  
  test('SettingsForm form passes invalid password (less than 4 symbols)' , async () => {
    render(renderComponent())
    const password = screen.getByRole('password');
    const button = screen.getByRole('button')
    const username = screen.getByRole('username')

    await act(async () => {
      fireEvent.change(password, { target: { value: '123' }});
      fireEvent.change(username, { target: { value: 'cortex' } });
    });

    await act(async () => {
      fireEvent.submit(button);
    });

    expect(password).toHaveValue('123');
    expect(username).toHaveValue('cortex');
    expect(screen.getByText('Пароль как минимум 4 символа')).toBeInTheDocument();
  });

  test('SettingsForm form passes invalid password (more than 12 symbols)' , async () => {
    render(renderComponent())
    const password = screen.getByRole('password');
    const button = screen.getByRole('button')
    const username = screen.getByRole('username')

    await act(async () => {
      fireEvent.change(password, { target: { value: '1234567891234' }});
      fireEvent.change(username, { target: { value: 'cortex' } });
    });

    await act(async () => {
      fireEvent.submit(button);
    });

    expect(password).toHaveValue('1234567891234');
    expect(username).toHaveValue('cortex');
    expect(screen.getByText('Пароль не больше 12 символов')).toBeInTheDocument();
  });
})