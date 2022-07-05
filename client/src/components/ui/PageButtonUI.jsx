import React from 'react'
import { Link } from 'react-router-dom';

function PageButtonUI({text, link, fn}) {
  return (
		<Link to={`/${link}`}>
			<button className={'button__page'} onClick={fn}>
				{text}
			</button>
		</Link>
	);
}

export default PageButtonUI