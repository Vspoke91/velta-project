import React from 'react'
import './Header.css'

function Header({logo_Name}) {
  return (
    <header className="App-header">
        <a className="App-logo" href='index'>
            <span>{logo_Name}</span>
        </a>
        <ul>
            <li><a className='Navigate-Seleted' href="index">Code</a></li>
            <li><a href="index">Digital Art</a></li>
            <li><a href="index">My Life</a></li>
        </ul>
    </header>
  )
}

export default Header