import './Footer.css'
import { motion } from 'framer-motion'
import Animation from "../../Utils/FramerAnimations"

function Footer() {
    return (
        <div id='Footer'>
            <div className='work'>
                <h1>Want to Work with me?
                    <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '300',
                    }}> Contact me.</span>
                </h1>

                <a href="mailto:victorvjro91@gmail.com"
                    style={{
                        textDecoration: 'none',
                        fontSize: '1.3rem',
                        fontWeight: '400',
                        marginTop: '10px',
                        color: '#2985cc'
                    }}>victorvjro91@gmail.com</a>
            </div>
            <div className='icons'>
                <a href='https://github.com/Vspoke91'>
                    <motion.img
                        variants={Animation.fadeIn(50)}
                        whileHover={{ scale: 1.2 }}
                        src='/Icons/Github.svg' />
                </a>

                <a href='https://www.linkedin.com/in/victor-romero-4630b8228/'>
                    <motion.img
                        variants={Animation.fadeIn(50)}
                        whileHover={{ scale: 1.2 }}
                        src='/Icons/LinkedIn.svg' />
                </a>

                <a href='https://portfolio.veltaproject.com/'>
                    <motion.img
                        variants={Animation.fadeIn(50)}
                        whileHover={{ scale: 1.2 }}
                        src='/Icons/Portfolio.svg' />
                </a>
                <a href='https://www.upwork.com/freelancers/~01a9fddd1aec6d32ce/'>
                    <motion.img
                        variants={Animation.fadeIn(50)}
                        whileHover={{ scale: 1.2 }}
                        src='/Icons/Upwork.svg' />
                </a>
            </div>
        </div >
    )
}
export default Footer