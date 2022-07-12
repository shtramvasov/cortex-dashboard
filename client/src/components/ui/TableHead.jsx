import React from 'react'

function TableHead({ headers, deleteButton }) {
  return (
		<div className='table-head'>
			<ul className='table-row'>
        {headers.map(header => (
          <li className='table-col'>{header}</li>
        ))}
        {deleteButton
        ? <li className='table-col'></li>: null}
			</ul>
		</div>
	);
}

export default TableHead