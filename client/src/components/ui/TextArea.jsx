import React from 'react';

function TextAreaUI({text, label = 'Описание', cols = '30', rows = '10', fn}) {
	return (
		<label className='flex cols'>
			{label}
			<textarea className='input' cols={cols} rows={rows} onChange={fn}>
				{text}
			</textarea>
		</label>
	);
}

export default TextAreaUI;
