import React from 'react';

function Sidebar() {

  return <div>Привет, {localStorage.getItem('username')}</div>;
}

export default Sidebar