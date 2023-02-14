import React from 'react'
import Content from '../js/Content';
import Header from '../js/Header';
import Navigation from '../js/Navigation';
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