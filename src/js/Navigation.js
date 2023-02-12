import React from 'react'
import '../styles/Navigation.css'

function Navigation({contentItems}) {

  let tittleElements = new Array(contentItems.length);

  let scrollToID = (id) =>{
    let element = document.getElementById(id).children[0].children[0];

    element.scrollIntoView({behavior: 'smooth', block: 'center'});
    element.style.color = "RED";
    setTimeout(function(){element.style.color = "#388bfd"}, 1000);
  }

  for(let i = 0; i < contentItems.length; i++)
    tittleElements[i] = <button onClick={() => scrollToID(contentItems[i].tittle)}>{contentItems[i].tittle}</button>;  

  return (
    <div className='Navigation'>
      {tittleElements}
    </div>
  )
}

export default Navigation