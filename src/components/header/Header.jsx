import React from 'react'
import { useLocation } from 'react-router-dom'
import './Header.css'

function SelectorSwitch() {
  const linkElements =
    [
      React.createElement('a', { href: '/' }, 'Home'),
      React.createElement('a', { href: '/Coding' }, 'Coding'),
      React.createElement('a', { href: '/ArtWork' }, 'Art Work')
    ]

  switch (useLocation().pathname) {
    case '/':
      linkElements[0] = React.cloneElement(linkElements[0], { className: 'Header-Selected' })
      break
    case '/Coding':
      linkElements[1] = React.cloneElement(linkElements[1], { className: 'Header-Selected' })
      break
    case '/ArtWork':
      linkElements[2] = React.cloneElement(linkElements[2], { className: 'Header-Selected' })
      break

    default:// Do nothing;
  }

  return linkElements
}

function Header() {
  return (
    <header className='App-header'>
      <a className='App-logo' href='/'>
        <img src='VeltaLogo.png' alt='img' />
        <span>Velta Project</span>
      </a>
      <nav>
        {SelectorSwitch()}
      </nav>
    </header>
  )
}

export default Header
