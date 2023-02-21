import React from 'react'
import '../styles/Coding.css'
import Header from '../components/Header';
import SideBarNavigation from '../components/SideBarNavigation';
import ContentData from '../data/CodingProjectsData'
import ContentObject from '../components/ContentObject'

function Coding() {

  let contentElements = new Array(ContentData.length);

  for(let i = 0; i < ContentData.length; i++){
    contentElements[i] = <ContentObject
    Tittle = {ContentData[i].tittle} 
    Description = {ContentData[i].description}
    Pictures = {ContentData[i].images}
    Skills = {ContentData[i].skills}
    />;
  }

  return (
    <div className='main'>
      <Header logo_Name={'Velta Projects'} />
      <SideBarNavigation contentItems={ContentData}/>
      <div className='mainContent mainContentCoding'>
        {contentElements}
      </div>
    </div>
  )
}

export default Coding