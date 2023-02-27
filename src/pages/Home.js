import React from 'react'
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
          <h1>Velta Projects</h1>
        </div>

        <div className='contentItem' style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png)"}}>
          <div className='itemText'>
            <h1>Coding</h1>
            <h2>Coding is a section made to show all the projects I have work throughout my developer journey<br/><br/>Games, Destop Apps, Mobile apps</h2>
            <a href='/Coding'>Go to section</a>
          </div>
          <div className='itemImages'>
            <img src='images/Coding/Survival_1.png'/>
          </div>
        </div>

        <div className='contentItem invertFlex' style={{backgroundImage: "url(https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=)"}}>
          <div className='itemText'>
              <h1>Art Work</h1>
              <h2>My creative side were I created drawings into digital art<br/><br/>PhotoShop, GIMP</h2>
              <a href='/ArtWork'>Go to section</a>
            </div>
            <div className='itemImages'>
              <img src='images/ArtWork/MoonFlower.png'/>
            </div>
        </div>
        
        <div className='contentMyLife'>
          My life section
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </divc>
  )
}

export default Home