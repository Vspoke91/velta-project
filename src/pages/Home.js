import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
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

  const rightFadeInAnimation = {
    hidden: { 
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut", 
        duration: 2,
        opacity: { duration: 1.5},
      }
    }
  }

  const leftFadeInAnimation = {
    hidden: { 
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut", 
        duration: 2,
        opacity: { duration: 1.5},
      }
    }
  }

  const topFadeInAnimation = {
    hidden: { 
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut", 
        duration: 2,
        opacity: { duration: 1.5 },
      }
    }
  }

  const popInAnimation = {
    hidden: { 
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut", 
        duration: 2,
        opacity: { duration: 1.5 },
      },
    },
  }

  return (
    <div className='main'>
      <Header logo_Name={'Velta Projects'}/>
      <div className='mainContent' id='HomePageContent'>
        <motion.div className='contentTittle' variants={topFadeInAnimation} initial = "hidden" whileInView = "show" viewport = {{once:true}}>
          <ul>{imageElement}</ul>
          <TypeAnimation
            sequence={[
              1500,
              'Velta-Projects',
            ]}
            speed = {8}
            wrapper="h1"
            cursor={false}
          />
        </motion.div>

        <div className='contentItem' style={{backgroundImage: "url(images/Coding/Survival_1.png)"}}>
          <motion.div className='itemText' variants={rightFadeInAnimation} initial = "hidden" whileInView = "show" viewport = {{once:true, amount:0.5}}>
            <h1>Coding</h1>
            <h2>Coding is a section made to show all the projects I have work throughout my developer journey<br/><br/>Games, Destop Apps, Mobile apps</h2>
            <a href='/Coding'>Go to section</a>
          </motion.div>
          <motion.div className='itemImages' variants={leftFadeInAnimation} initial = "hidden" whileInView = "show" viewport = {{once:true, amount:0.5}}>
            <img src='images/Coding/Survival_1.png'/>
          </motion.div>
        </div>

        <div className='contentItem invertFlex' style={{backgroundImage: "url(images/ArtWork/MoonFlower.png)"}}>
          <motion.div className='itemText' variants={leftFadeInAnimation} initial = "hidden" whileInView = "show" viewport = {{once:true, amount:0.5}}>
              <h1>Art Work</h1>
              <h2>My creative side were I created drawings into digital art<br/><br/>PhotoShop, GIMP</h2>
              <a href='/ArtWork'>Go to section</a>
            </motion.div>
            <motion.div className='itemImages' variants={rightFadeInAnimation} initial = "hidden" whileInView = "show" viewport = {{once:true, amount:0.5}}>
              <img src='images/ArtWork/MoonFlower.png'/>
            </motion.div>
        </div>
        
        {/* <div className='contentMyLife'>
          My life section
          <i class="fa-brands fa-github"></i>
        </div> */}
      </div>
    </div>
  )
}

export default Home