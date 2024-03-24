
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import banner1 from './assets/banner.png'
import scrolDown from './assets/scroll-down.svg'
import star from './assets/stars.svg'
import { motion } from "framer-motion";

const Banner = () => {

    const iconVariants = {
        hover: {
            scale: 1.2,
            transition: { duration: 0.3 },
        },
    };

    
    const imageVariants = {
        rotate: {
            rotate: 360, // Rotate 360 degrees
            transition: {
                duration: 5, // Duration of the rotation animation
                ease: "linear", // Linear easing for a continuous rotation
                repeat: Infinity, // Repeat the animation indefinitely
            },
        },
    };
    return (
        <div>
            <div id="home" className="lg:flex justify-between lg:mx-24 items-center lg:mt-40 lg:mb-80">
                <div className="lg:ml-[400px] lg:text-start text-center mt-10">
                    <h2 className="lg:text-6xl text-3xl   font-play  text-[#DAFFFB] ">Hey, I'm Shanjida Moury</h2>
                    <h3 className="lg:text-4xl text-2xl mt-5 font-play text-[#DAFFFB]">Fronted Developer & </h3>
                    <h3 className="lg:text-4xl text-2xl mt-5 font-play text-[#DAFFFB]">
                        <Typewriter
                            words={['React JS Developer', 'Next JS Developer', 'Junior MERN Stack Developer']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h3>
                    <h3></h3>
                    <div className="text-[#DAFFFB] flex justify-center lg:justify-start  gap-5 lg:mt-10 mt-3">
                        <motion.p
                            className="text-4xl"
                            variants={iconVariants}
                            whileHover="hover"
                        > <a href="https://github.com/mouri199" className="text-3xl"><FaGithub /></a>
                        </motion.p>

                        <motion.p
                            className="text-4xl"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <a href="https://www.facebook.com/mouri1999s " className="text-3xl" >
                                <FaFacebook />
                            </a>
                        </motion.p>

                        <motion.p
                            className="text-4xl"
                            variants={iconVariants}
                            whileHover="hover"
                        >
                            <a href="https://www.linkedin.com/in/shanjida-moury-ba1b44284/" className="text-3xl"> <FaLinkedinIn /> </a>
                        </motion.p>
                    </div>
                    <div>
                        <motion.img className="absolute mt-10 ml-[350px] lg:block hidden" src={star} alt="" variants={imageVariants}
                            animate="rotate" />
                    </div>
                </div>
                <div>
                    <img className=" mx-auto mt-10 lg:mt-0  bg-[#176B87]  rounded-b-full rounded-t-full lg:h-[450px] h-[380px] lg:w-[320px]" src={banner1} alt="" />
                </div>
                <div className="absolute lg:ml-[1000px] ml-[250px] -mt-[100px] lg:mt-[350px]">
                    <Link to='contact'><img className="bg-[#DAFFFB] rounded-full lg:w-[120px] w-[100px] " src={scrolDown} alt="" /></Link>

                </div>
            </div>

        </div>
    );
};

export default Banner;