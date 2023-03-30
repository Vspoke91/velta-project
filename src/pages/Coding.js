import React from 'react'
import '../styles/Coding.css'
import Header from '../components/Header';
import SideBarNavigation from '../components/SideBarNavigation';
import ContentData from '../data/CodingProjectsData'

function Coding() {

  let contentElements = new Array(ContentData.length);

  for (let i = 0; i < ContentData.length; i++) {
    contentElements[i] = createContentElement(ContentData[i])
  }

  return (
    <div className='main'>
      <Header logo_Name={'Velta Projects'} />
      <SideBarNavigation contentItems={ContentData} />
      <div className='mainContent' id='codingPageContent'>
        {contentElements}
      </div>
    </div>
  )
}

function createContentElement(data) {

  let Tittle = data.tittle;
  let Description = data.description;

  let SkillsElements = new Array(data.skills.length);

  for (let i = 0; i < data.skills.length; i++) {
    SkillsElements[i] = <h2>{data.skills[i]}</h2>;
  }

  let ImageElements = new Array(data.images.length);

  for (let i = 0; i < data.images.length; i++) {
    ImageElements[i] = <input id={"pictureInput_" + Tittle + "_" + i} type="radio" name={"picture_" + Tittle} onClick={() => setTargetPicture(data.images[i])} checked></input>;
  }

  function setTargetPicture(image) {
    document.getElementById(Tittle + '_Picture').src = image;
    document.getElementById(Tittle + '_Picture').alt = image;
    document.getElementById(Tittle + '_PictureBackground').style.backgroundImage = "url(" + image + ")";
  }


  return (
    <div className='ContentItem' id={Tittle}>
      <div className='TextSection'>
        <h1 className='TextSectionTittle'>{Tittle}</h1>
        <p className='TextSectionDescription'>{Description}</p>
        <div className='TextSectionSkills'>
          {SkillsElements}
        </div>
      </div>
      <div className='PictureSection' id={Tittle + '_PictureBackground'} style={{ backgroundImage: "url(" + data.images[data.images.length - 1] + ")" }}>
        <div className='PictureSectionNavigation'>
          {ImageElements}
        </div>
        <img id={Tittle + '_Picture'} height='250px' src={data.images[data.images.length - 1]} alt={data.images[data.images.length - 1]} />
      </div>
    </div>)
}
export default Coding