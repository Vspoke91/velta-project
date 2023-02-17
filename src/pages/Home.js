import React from 'react'
import Header from '../components/Header';
import '../styles/Home.css'

function Home() {
  return (
    <divc className='main'>
      <Header logo_Name={'Velta Projects'}/>
      <div className='mainContent'>
        <div className='contentTittle' style={{backgroundImage: "url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)"}}>
          <h1>Velta Projects</h1>
        </div> {/*This will be tittle with a background of all my work like (20. Alexis Johnson Art) https://www.sitebuilderreport.com/inspiration/modern-websites?a=ga&keyword=dsa-363651420386&ad=624613568096&gclid=Cj0KCQiAxbefBhDfARIsAL4XLRrRf1BHkaaZKXrPIml5i91turSWLEtz4bpT5Tb4m4uW8Pvckt60dq8aAn-ZEALw_wcB */}
        
        <div className='contentItem' style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png)"}}>
          <div className='itemText'>
            <h1>Coding</h1>
            <h2>Coding is a section made to show all the projects I have work throughout my developer journey<br/><br/> Games, Destop Apps, Mobile apps</h2>
            <a href='/Coding'>Go to section</a>
          </div>
          <div className='itemImages'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'/>
          </div>
        </div>

        <div className='contentItem invertFlex' style={{backgroundImage: "url(https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=)"}}>
          <div className='itemText'>
              <h1>Art Work</h1>
              <h2>In my art section you will be able to see my creative side</h2>
              <a href='/ArtWork'>Go to section</a>
            </div>
            <div className='itemImages'>
              <img src='https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ='/>
            </div>
        </div>
        
        {/* <div className='contentMyLife'>My life section</div> */}
      </div>
    </divc>
  )
}

export default Home