import './Footer.css'
import { motion } from 'framer-motion'
import Animation from "../../Utils/FramerAnimations"

function Footer() {
    return (
        <div id='Footer'>
            <div className='work'>
                <h1>Want to Work with me?
                    <spam>
                        Contact me.
                    </spam>
                </h1>
                <p>victorvjro91@gmail.com</p>
            </div>

            <div className='icons'>
                <a href='https://github.com/Vspoke91'>
                    <motion.img
                        variants={Animation.fadeIn(50)}
                        whileHover={{ scale: 1.2 }}
                        height='40px' width='auto'
                        src='/Icons/Github.svg' />
                </a>
            </div>
        </div>
    )
}
export default Footer