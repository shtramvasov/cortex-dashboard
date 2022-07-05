import React from 'react'

function InputUI({ placeholder, type = 'text', label, icon, fn }) {
  return label ? (
		<label className='flex cols'>
			{label}
			<input
				type={type}
				placeholder={placeholder}
				className={'input'}
				onChange={fn}
			/>
		</label>
	) : (
		<input
			type={type}
			placeholder={placeholder}
			className={icon ? `input__${icon}` : 'input'}
			onChange={fn}
		/>
	);
}

export default InputUI;