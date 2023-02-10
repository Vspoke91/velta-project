import React from 'react'
import './ContentObject.css'

function ContentObject({Tittle,Description,Pictures,Skills}) {


  for (let i = 0; i < Skills.length; i++){
    Skills[i] = <h4>{Skills[i]}</h4>;
  }

  let pictureElements = new Array(Pictures.length);

  for (let i = 0; i < Pictures.length; i++){
    pictureElements[i] = <input id={"pictureInput_"+Tittle+"_"+i} type="radio" name = {"picture_"+Tittle} onClick={() => setTargetPicture(Pictures[i])} checked></input>;
  }

  function setTargetPicture (picture) {
    document.getElementById(Tittle+'_Picture').src = picture;
    document.getElementById(Tittle+'_Picture').alt = picture;
    document.getElementById(Tittle+'_PictureBackground').style.backgroundImage = "url("+picture+")";
  }

  return (
    <div className='ContentObject' id={Tittle}>
      <div className='TextSection'>
        <h1 className='TextSectionTittle'>{Tittle}</h1>
        <h3 className='TextSectionDescription'>{Description}</h3>
        <div className='TextSectionSkills'>{Skills}</div>
      </div>
      <div id={Tittle+'_PictureBackground'} className='PictureSection' style={{backgroundImage: "url("+Pictures[Pictures.length-1]+")"}}>
        <div className='PictureSectionNavigation'>{pictureElements}</div>
        <img id={Tittle+'_Picture'} height = '250px' src={Pictures[Pictures.length-1]} alt={Pictures[Pictures.length-1]}/>
      </div>
    </div>
  )
}

export default ContentObject