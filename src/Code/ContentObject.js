import React from 'react'
import './ContentObject.css'

function ContentObject({Tittle,Description,Pictures,Languages}) {


  for (let i = 0; i < Languages.length; i++) {
      Languages[i] = <h4>{Languages[i]}</h4>;
  }

  return (
    <div className='ContentObject'>
      <div className='TextSection'>
        <h1 className='TextSectionTittle'>{Tittle}</h1>
        <h3 className='TextSectionDescription'>{Description}</h3>
        <div className='TextSectionCodingLanguage'>{Languages}</div>
      </div>
      <div className='PictureSection' style={{backgroundImage: "url("+Pictures[0]+")"}}>
        <img src={Pictures[0]} alt='this'></img>
      </div>
    </div>
  )
}

export default ContentObject