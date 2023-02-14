import React from 'react'
import '../styles/Header.css'

function Header({logo_Name}) {
  return (
    <header className="App-header">
        <a className="App-logo" href='index'>
            <span>{logo_Name}</span>
        </a>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Coding">Coding</a></li>
            <li><a href="/ArtWork">Art Work</a></li>
        </ul>
    </header>
  )
}

export default Header