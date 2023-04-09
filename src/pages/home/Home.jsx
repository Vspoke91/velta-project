import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { motion } from "framer-motion"
import './Home.css'
import Animation from "../../Utils/FramerAnimations"
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'
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
      <Footer />
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
    <div className='contentTittle' variants={Animation.fadeIn(0, 0)} >
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

    </div>
  )
}



const CodingSection = ({ image }) => {

  return (
    <div
      className='contentItem'
      style={{
        backgroundImage: "url(" + image + ")"
      }}>

      <motion.div
        className='itemText'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}>

        <motion.h1
          whileHover={{ scale: 1.05 }}
          style={{
            fontWeight: '700',
            margin: 'auto',
            marginBottom: "20px",
          }}>Coding Project</motion.h1>

        <p
          style={{
            paddingBottom: "40px",
            width: '90%', maxWidth: '500px',
            margin: 'auto',
            fontSize: '1.3rem', fontWeight: '300'
          }}>
          Started as
          <spam style={{
            color: '#278cd9'
          }}> curiosity </spam>
          to create content for games, that later developed into a
          <spam style={{
            color: '#278cd9'
          }}> hobby </spam>
          to create tools to help others, finally into a
          <spam style={{
            color: '#278cd9'
          }}> passion </spam>
          to pursued a career as a developer
        </p>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            paddingBottom: "40px",
            flexDirection: 'row-reverse'
          }}
          variants={Animation.childDelay(0.2)}>

          <motion.img
            variants={Animation.fadeIn(-50)}
            whileHover={{ scale: 1.2 }}
            height='40px' width='auto'
            src='/Icons/Java.svg' />
          <motion.img
            variants={Animation.fadeIn(-50)}
            whileHover={{ scale: 1.2 }}
            height='40px' width='auto'
            src='/Icons/JavaScript.svg'
          />
          <motion.img
            variants={Animation.fadeIn(-50)}
            whileHover={{ scale: 1.2 }}
            height='40px' width='auto'
            src='/Icons/HTML.svg' />
          <motion.img
            variants={Animation.fadeIn(-50)}
            whileHover={{ scale: 1.2 }}
            height='40px' width='auto'
            src='/Icons/CSS.svg' />
          <motion.img
            variants={Animation.fadeIn(-50)}
            whileHover={{ scale: 1.2 }}
            height='40px' width='auto'
            src='/Icons/CSharp.svg' />

        </motion.div>

        <motion.a href='/Coding'><motion.button variants={Animation.resize(1.05, "white")} whileHover="show">Go to section  <img src='/Icons/ArrowUtil.svg' /></motion.button></motion.a>
      </motion.div>

      <motion.div className='itemImages' variants={Animation.foldOut('vertical', 2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0 }}>
        <img src={image} />
      </motion.div>

    </div >
  );
}

const ArtWorkSection = ({ image }) => {

  return (
    <div className='contentItem invertFlex' style={{ backgroundImage: "url(" + image + ")" }}>

      <motion.div
        className='itemText'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}>

        <motion.h1
          whileHover={{ scale: 1.05 }}
          style={{
            fontWeight: '700',
            margin: 'auto',
            marginBottom: "20px",
          }}>Art Work</motion.h1>

        <p
          style={{
            paddingBottom: "40px",
            width: '90%', maxWidth: '500px',
            margin: 'auto',
            fontSize: '1.3rem', fontWeight: '300'
          }}>
          Art is a way to express happiness, sadness, anger, and all other emotions. Your
          <spam style={{
            color: '#278cd9'
          }}> creativity is your limit </spam>
          when creating art, for that same reason I show what I create to the world.
        </p>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            paddingBottom: "40px",
          }}
          variants={Animation.childDelay(0.2)}>

          <motion.img
            variants={Animation.fadeIn(50)}
            whileHover={{ scale: 1.2 }}
            height='40px' width='auto'
            src='/Icons/Photoshop.svg' />
          <motion.img
            variants={Animation.fadeIn(50)}
            whileHover={{ scale: 1.2 }}
            height='40px' width='auto'
            src='/Icons/Gimp.svg' />

        </motion.div>
        <a href='/ArtWork'><motion.button variants={Animation.resize(1.05, "white")} whileHover="show">Go to section <img src='/Icons/ArrowUtil.svg' /></motion.button></a>
      </motion.div>

      <motion.div className='itemImages' variants={Animation.foldOut('horizontal', 2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0 }}>
        <img src={image} alt="Error" />
      </motion.div>

    </div>
  );
}

export default Home