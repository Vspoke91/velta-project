import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import '../styles/Home.css'
import Animation from "../Utils/FramerAnimations"
import Header from '../components/Header';

function Home() {

  return (
    <div className='main'>
      <Header logo_Name={'Velta Projects'}/>
      <div className='mainContent' id='HomePageContent'>
        <TittleSection/>
        <CodingSection image="images/Coding/Survival_1.png"/>
        <ArtWorkSection image="images/ArtWork/MoonFlower.png"/>
      </div>
    </div>
  )
}

const TittleSection = () => {

  function importAll(list) {

    let img = [];

    list.keys().forEach((item, index) => { img[index] = list(item); });

    return img;
  }
  let images = importAll(require.context('/public/images/ArtWork/', false, /\.(png|jpe?g|svg)$/));
  let imageElement = []

  Object.values(images).forEach((img, index) => {imageElement[index] = <SplideSlide><img src={img} alt = {img}/></SplideSlide>});

  const slideOptions = {
     arrows: false, 
     pagination: false,  
     perPage: 3, 
     type: "loop", 
     autoScroll: {
      speed: 0.4, 
      pauseOnHover: false
    }

  }

  return(
    <motion.div className='contentTittle' variants={Animation.fadeIn(0, 100)} initial = "hidden" whileInView = "show" viewport = {{once:true}}>

      <Splide id='HomeTittleSlide' options={slideOptions} extensions={{ AutoScroll }}>{imageElement}</Splide>

      <motion.h1 className='unselectable' variants={Animation.fadeOut(0.4)} whileHover = "fade">Velta-Projects</motion.h1>
    </motion.div>
  )
}

const CodingSection = ({image}) => {
  return(
    <div className='contentItem' style={{backgroundImage: "url("+image+")"}}>

      <motion.div className='itemText' variants={Animation.fadeIn(-100)} initial = "hidden" whileInView = "show" viewport = {{once:true, amount:0.4}}>
        <h1>Coding</h1>
        <h2>Coding is a section made to show all the projects I have work throughout my developer journey<br/><br/>Games, Destop Apps, Mobile apps</h2>
        <a href='/Coding'><motion.button variants={Animation.resize(1.05, "white")} whileHover = "show">Go to section</motion.button></a>
      </motion.div>

      <motion.div className='itemImages' variants={Animation.fadeIn(100)} initial = "hidden" whileInView = "show" viewport = {{once:true, amount:0.4}}>
        <img src={image}/>
      </motion.div>

    </div>
  );
}

const ArtWorkSection = ({image}) => {

  return(
    <div className='contentItem invertFlex' style={{backgroundImage: "url("+image+")"}}>

      <motion.div className='itemText' variants={Animation.fadeIn(100)} initial = "hidden" whileInView = "show" viewport = {{once:true, amount:0.4}}>
        <h1>Art Work</h1>
        <h2>My creative side were I created drawings into digital art<br/><br/>PhotoShop, GIMP</h2>
        <a href='/ArtWork'><motion.button variants={Animation.resize(1.05, "white")} whileHover = "show">Go to section</motion.button></a>
      </motion.div>

      <motion.div className='itemImages' variants={Animation.fadeIn(-100)} initial = "hidden" whileInView = "show" viewport = {{once:true, amount:0.4}}>
        <img src={image}/>
      </motion.div>

    </div>
  );
}

export default Home