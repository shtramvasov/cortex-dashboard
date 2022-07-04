import React from 'react'

function InputUI({ placeholder, type = 'text', label, icon }) {
  return label ? (
		<label className='flex cols'>
			{label}
			<input
				type={type}
				placeholder={placeholder}
				className={'input'}
				//onChange
			/>
		</label>
	) : (
		<input
			type={type}
			placeholder={placeholder}
			className={icon ? `input__${icon}` : 'input'}
			// className={className ? `__input${className}`: null}
			//onChange
		/>
	);
}

export default InputUI;