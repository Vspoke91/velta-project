import React from 'react'
import './Navigation.css'

function SideBarNavigation({ contentItems }) {
  const tittleElements = new Array(contentItems.length)

  const scrollToID = (id) => {
    const element = document.getElementById(id).children[0].children[0]

    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    element.style.color = 'RED'
    setTimeout(function () { element.style.color = '#388bfd' }, 1000)
  }

  for (let i = 0; i < contentItems.length; i++) { tittleElements[i] = <button onClick={() => scrollToID(contentItems[i].tittle)}>{contentItems[i].tittle}</button> }

  return (
    <div className='Navigation'>
      {tittleElements}
    </div>
  )
}

export default SideBarNavigation
