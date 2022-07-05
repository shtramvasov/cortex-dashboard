import { Link } from 'react-router-dom';

function ButtonUI({ text = 'Элемент кнопки', type = 'button', link, fn }) {
	return link ? (
		<Link to={`/${link}`}>
			<button type={type} className={'button'} onClick={fn}>
				{text}
			</button>
		</Link>
	) : (
		(type === 'delete' ? (
			<button type='button' className={'button__delete'} onClick={fn}></button>
		) : (
			<button type={type} className={'button'} onClick={fn}>
				{text}
			</button>
		))
	);
}

export default ButtonUI;
