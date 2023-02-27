import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Header from '../components/Header';
import '../styles/Home.css'
 
const images = importAll(require.context('/public/images/ArtWork/', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
  let images = [];
  r.keys().forEach((item, index) => { images[index] = r(item); });
  return images
}

function Home() {
  
  let imageElement = []

  Object.values(images).forEach((img, index) => {imageElement[index] = <li><img src={img} alt = {img}/></li>});

  return (
    <divc className='main'>
      <Header logo_Name={'Velta Projects'}/>
      <div className='mainContent' id='HomePageContent'>
        <div className='contentTittle'>
          <ul>{imageElement}</ul>
          <TypeAnimation
            sequence={[
              'Velta-Projects',
              10000,
              'Welcome',
              1000 
            ]}
            wrapper="h1"
            cursor={false}
            repeat={Infinity}
            omitDeletionAnimation={true}
          />
        </div>

        <div className='contentItem' style={{backgroundImage: "url(images/Coding/Survival_1.png)"}}>
          <div className='itemText'>
            <h1>Coding</h1>
            <h2>Coding is a section made to show all the projects I have work throughout my developer journey<br/><br/>Games, Destop Apps, Mobile apps</h2>
            <a href='/Coding'>Go to section</a>
          </div>
          <div className='itemImages'>
            <img src='images/Coding/Survival_1.png'/>
          </div>
        </div>

        <div className='contentItem invertFlex' style={{backgroundImage: "url(images/ArtWork/MoonFlower.png)"}}>
          <div className='itemText'>
              <h1>Art Work</h1>
              <h2>My creative side were I created drawings into digital art<br/><br/>PhotoShop, GIMP</h2>
              <a href='/ArtWork'>Go to section</a>
            </div>
            <div className='itemImages'>
              <img src='images/ArtWork/MoonFlower.png'/>
            </div>
        </div>
        
        {/* <div className='contentMyLife'>
          My life section
          <i class="fa-brands fa-github"></i>
        </div> */}
      </div>
    </divc>
  )
}

export default Home