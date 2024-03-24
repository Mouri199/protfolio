
import { CiSaveDown1 } from 'react-icons/ci';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";


const About = () => {

    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
                yoyo: Infinity, // The button will scale up and down infinitely on hover
            },
        },
    };
    return (
        <div>
            <div id="about" className="lg:flex items-center justify-between font-work lg:mx-24 px-5 gap-60">

                <div className="lg:ml-[380px] mt-9">
                    <div className="my-4">
                        <h2 className="text-xl text-[#49A2A3]">Name</h2>
                        <p className="text-[#DAFFFB]  ">Shanjida Moury</p>
                    </div>
                    <div>
                        <h2 className="text-xl text-[#49A2A3]">Date Of Birth</h2>
                        <p className="text-[#DAFFFB] ">05 February,1999</p>
                    </div>
                    <div className="my-4">
                        <h2 className="text-xl text-[#49A2A3]">Email id</h2>
                        <p className=" text-[#DAFFFB] ">mourichow206@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl text-[#49A2A3]">Phone No</h2>
                        <p className="text-[#DAFFFB] ">01701309917</p>
                    </div>
                    <a href="https://drive.google.com/uc?export=download&id=1gKtMxXCf42VhgDUgQSmP63XuWokfew7E" target="blank" ><motion.button className="btn btn-outline shadow-[0_10px_15px_-3px_rgb(73,162,163)] hover:bg-[#176B87] text-[#DAFFFB] mt-16" variants={buttonVariants}
                        whileHover="hover">
                        Get my resume
                        <div>
                            <CiSaveDown1 />
                        </div>
                    </motion.button></a>
                </div>

                <div>
                    <h3 className="lg:text-5xl text-3xl font-play text-[#DAFFFB] mb-3">About Me</h3>
                    <p className="text-[#49A2A3] lg:text-lg text-sm">I'm Shanjida Moury, Junior MERN Stack web developer, loves to create attractive websites with user-friendly experiences.
                        <br />
                        <br />
                        I'm a skilled web developer with expertise in creating responsive websites that work well on various devices. I specialize in hand-coding clean, semantic, and cross-browser compatible code. My skills include HTML, CSS, Tailwind, JavaScript, and React. I also have experience with Node.js, Express.js, and MongoDB. If you're looking for a mern-stack developer for your team, I'd love to discuss how my skills align with your needs. Feel free to contact me via email or using the information below.
                    </p>
                    <Link to='contact'> <motion.button className="btn btn-outline shadow-[0_10px_15px_-3px_rgb(73,162,163)] hover:bg-[#176B87] text-[#DAFFFB] mt-6" variants={buttonVariants}
                        whileHover="hover">
                        Contact With Me
                    </motion.button></Link>
                </div>

            </div>
        </div>
    );
};

export default About;