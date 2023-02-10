import React, {useState} from 'react'
import './App.css';
import Content from './Content';
import Header from './Header';
import Navigation from './Navigation';
import ContentData from './ContentData';


function App() {

  return (
    <div className="App">
      <Header logo_Name={'Velta Projects'}/>
      <div className='App-main'>
        <Navigation contentItems = {ContentData}/>
        <Content contentItems = {ContentData}/>
      </div>
    </div>
  );
}

export default App;
