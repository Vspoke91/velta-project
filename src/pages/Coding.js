import React from 'react'
import Content from '../components/Content';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ContentData from '../data/ContentData';

function Coding() {
  return (
    <div>
      <Header logo_Name={'Velta Projects'}/>
      <div className='App-main'>
        <Navigation contentItems = {ContentData}/>
        <Content contentItems = {ContentData}/>
      </div>
    </div>
  )
}

export default Coding