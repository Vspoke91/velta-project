import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion"
import './Home.css'
import Animation from "../../Utils/FramerAnimations"
import Header from '../../components/header/Header';
import imageURLS from '../../data/ArtWorkImages'

function Home() {


  return (
    <div className='main'>
      <Header logoName={'Velta Project'} />
      <div className='mainContent' id='HomePageContent'>
        <TittleSection />
        <CodingSection image={'/images/Coding/Survival_1.png'} />
        <ArtWorkSection image={'/images/ArtWork/MoonFlower.png'} />
      </div>
    </div>
  )
}

const TittleSection = () => {
  let imageElement = []

  Object.values(imageURLS).forEach((img, index) => {
    imageElement[index] =
      <SplideSlide
        key={index}>
        <img
          src={img}
          alt={img} />
      </SplideSlide>
  });

  const slideOptions = {
    arrows: false,
    pagination: false,
    perPage: 3,
    type: "loop",
    drag: "free",
    autoScroll: {
      speed: 0.2,
      pauseOnHover: false
    }

  }

  return (
    <motion.div className='contentTittle' variants={Animation.fadeIn(0, 0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Splide id='HomeTittleSlide' options={slideOptions} extensions={{ AutoScroll }}>{imageElement}</Splide>

      <div className='tittleHolder unselectable' >

        <p style={{ fontWeight: '400' }}>Imagination</p>
        <p style={{ fontWeight: '100' }}>is the seed of</p>
        <p style={{ fontWeight: '1000' }}>creativity</p>
        <p
          style={{
            fontWeight: '200',
            fontSize: '1rem',
            marginTop: '10px'
          }}>
          Art that started on paper to the digital world
        </p>

      </div>
      {/* <motion.p className='unselectable' variants={Animation.fadeOut(0.4)} whileHover="fade">Imagination is the seed of creativity</motion.p> */}
    </motion.div>
  )
}

const CodingSection = ({ image }) => {
  return (
    <div className='contentItem' style={{ backgroundImage: "url(" + image + ")" }}>

      <motion.div className='itemText' variants={Animation.fadeIn(-100)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        <h1>Coding</h1>
        <h2>Coding is a section made to show all the projects I have work throughout my developer journey<br /><br />Games, Destop Apps, Mobile apps</h2>
        <a href='/Coding'><motion.button variants={Animation.resize(1.05, "white")} whileHover="show">Go to section</motion.button></a>
      </motion.div>

      <motion.div className='itemImages' variants={Animation.fadeIn(100)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        <img src={image} />
      </motion.div>

    </div>
  );
}

const ArtWorkSection = ({ image }) => {

  return (
    <div className='contentItem invertFlex' style={{ backgroundImage: "url(" + image + ")" }}>

      <motion.div className='itemText' variants={Animation.fadeIn(100)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        <h1>Art Work</h1>
        <h2>My creative side were I created drawings into digital art<br /><br />PhotoShop, GIMP</h2>
        <a href='/ArtWork'><motion.button variants={Animation.resize(1.05, "white")} whileHover="show">Go to section</motion.button></a>
      </motion.div>

      <motion.div className='itemImages' variants={Animation.fadeIn(-100)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        <img src={image} alt="Error" />
      </motion.div>

    </div>
  );
}

export default Home