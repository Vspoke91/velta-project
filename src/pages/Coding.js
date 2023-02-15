import React from 'react'
import Header from '../components/Header';
import Content from '../components/Content';
import SideBarNavigation from '../components/SideBarNavigation';
import ContentData from '../data/CodingProjectsData'

function Coding() {
  return (
    <div className='main'>
      <Header logo_Name={'Velta Projects'} />
      <div>
        <SideBarNavigation contentItems={ContentData}/>
        <Content contentItems={ContentData}/>
      </div>
    </div>
  )
}

export default Coding