import React from 'react'
import Header from '../components/Header';
import '../styles/Home.css'

function Home() {
  return (
    <divc className='main'>
      <Header logo_Name={'Velta Projects'}/>
      <div className='mainContent'>
        <div className='contentTittle'>
          <h1>Velta Projects</h1>
        </div> {/*This will be tittle with a background of all my work like (20. Alexis Johnson Art) https://www.sitebuilderreport.com/inspiration/modern-websites?a=ga&keyword=dsa-363651420386&ad=624613568096&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRrRf1BHkaaZKXrPIml5i91turSWLEtz4bpT5Tb4m4uW8Pvckt60dq8aAn-ZEALw_wcB */}
        <div className='contentCoding'>Coding Section</div>
        <div className='contentArtWork'>Art-Work Section</div>
        <div className='contentMyLife'>My life section</div>
      </div>
    </divc>
  )
}

export default Home