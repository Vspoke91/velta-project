import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Header.css'

function SelectorSwitch() {
  const linkElements =
    [
      React.createElement('a', { href: '/', key: 'Home' }, 'Home'),
      React.createElement('a', { href: '/Coding', key: 'Coding' }, 'Coding'),
      React.createElement('a', { href: '/ArtWork', key: 'ArtWork' }, 'Art Work')
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

  const [isHidden, setHidden] = useState(false);


  return (
    <header
      id='MainHeader'
      className='App-header'
      style={{
        flexDirection: isHidden ? 'column' : 'row-reverse',
        height: isHidden ? '' : '50px',
        visibility: isHidden ? 'visible' : 'hidden',
        marginTop: isHidden ? '0' : '20px',
        justifyContent: isHidden ? '' : 'space-between',
      }}>

      <img
        className='navController_Three'
        height='50px' width='auto'
        style={{
          display: isHidden ? 'none' : '',
          visibility: isHidden ? 'hidden' : 'visible'
        }}
        onClick={() => { setHidden(true) }}
        src='/Icons/ThreeLinesUtils.svg' />

      <img
        className='navController_X'
        height='40px' width='auto'
        style={{
          visibility: isHidden ? 'visible' : 'hidden'
        }}
        onClick={() => { setHidden(false) }}
        src='/Icons/XUtils.svg' />

      <a
        className='App-logo logo'
        href='/'
        style={{
          visibility: 'visible',
        }}>
        <img
          src='VeltaLogo.png'
          alt='img'
          style={{
            height: isHidden ? '' : '50px',
            width: 'auto'
          }} />
        <span>Velta Project</span>
      </a>
      <nav className='navigationButtons'
        style={{
          display: isHidden ? '' : 'none',
        }}>
        {SelectorSwitch()}
      </nav>
    </header>
  )
}

export default Header
