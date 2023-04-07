import './Coding.css'
import Header from '../../components/header/Header'
import SideBarNavigation from '../../components/sidebarNavigation/SideBarNavigation'
import projectsData from '../../data/CodingProjectsData'
import React from 'react'

function Coding() {
  const projectsArray = []

  for (let i = 0; i < projectsData.length; i++) {
    projectsArray.push(getProjectElement(projectsData[i], i))
  }

  return (
    <div className='main'>
      <Header logoName='Velta Project' />
      <SideBarNavigation contentItems={projectsData} />

      <div className='mainContent' id='codingPageContent'>
        {projectsArray}
      </div>

    </div>
  )
}

function getProjectElement(data, index) {
  const tittle = data.tittle
  const description = data.description
  const skillsElements = []
  const imageElements = []
  let defaultImageIndex = 0;

  //Check if index is out of bound, if true, keep value at 0
  if (data.defaultImageIndex < data.images.length)
    defaultImageIndex = data.defaultImageIndex

  //skills
  for (let i = 0; i < data.skills.length; i++) {
    skillsElements.push(<h2 key={i}>{data.skills[i]}</h2>)
  }

  //images
  for (let i = 0; i < data.images.length; i++) {
    imageElements.push(
      <input
        key={i}
        id={'pictureInput_' + tittle + '_' + i}
        type='radio'
        name={'picture_' + tittle}
        onClick={() => setTargetPicture(data.images[i])}
        defaultChecked={i == defaultImageIndex} //default a check to first element
      />)
  }

  function setTargetPicture(image) {
    document.getElementById(tittle + '_Picture').src = image
    document.getElementById(tittle + '_Picture').alt = image
    document.getElementById(tittle + '_PictureBackground').style.backgroundImage = 'url(' + image + ')'
  }

  return (
    <div className='ContentItem' id={tittle} key={index}>
      <div className='TextSection'>
        <h1 className='TextSectionTittle'>{tittle}</h1>
        <p className='TextSectionDescription'>{description}</p>
        <div className='TextSectionSkills'>
          {skillsElements}
        </div>
      </div>
      <div className='PictureSection' id={tittle + '_PictureBackground'} style={{ backgroundImage: 'url(' + data.images[defaultImageIndex] + ')' }}>
        <div className='PictureSectionNavigation'>
          {imageElements}
        </div>
        <img id={tittle + '_Picture'} height='250px' src={data.images[defaultImageIndex]} />
      </div>
    </div>
  )
}
export default Coding
