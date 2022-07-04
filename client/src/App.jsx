import InputUI from './components/ui/Input';

function App() {
  return (
		<>
			<InputUI label={'Лейбл'} placeholder={'Мистеркоп'} />
			<InputUI label={'Лейбл'} type={'password'} placeholder={'Мистеркоп'} />
			<InputUI placeholder={'Пользователь'} icon={'user'} />
			<InputUI placeholder={'Пароль'} type='password' icon={'password'} />
			<InputUI placeholder={'Поиск'} icon={'search'} />
			<InputUI placeholder={'Пустой текст'} />
		</>
	);
}

export default App;
