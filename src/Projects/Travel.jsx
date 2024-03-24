import { motion } from "framer-motion";
import project2 from '../assets/travilego.png'

const Travel = () => {
    const iconVariants = {
        hover: {
            scale: 1.2,
            transition: { duration: 0.3 },
        },
    };
    return (
        <div>
            <div className="mt-10 mb-20 lg:flex justify-between md:flex-row-reverse items-center md:gap-10">
                <img src={project2} alt="" className="md:w-1/2" />
                <div className="space-y-5 md:mx-10 lg:mx-0 md:mt-5 ">
                    <h1 className="mt-5 md:mt-0 text-xl md:text-3xl font-bold text-[#DAFFFB]">Travel Website</h1>
                    <p className="text-lg md:text-xl"><span className="font-bold text-[#DAFFFB]">Technologies Used:</span>
                        <div className='flex gap-3 my-3 justify-start'>
                            <motion.p
                                className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=tailwind" />
                                </a>
                            </motion.p>
                            <motion.p className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover">
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=firebase" />
                                </a>
                            </motion.p>

                            <motion.p className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover">
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=mongodb" />
                                </a>
                            </motion.p>
                            <motion.p className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover">
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=nodejs" />
                                </a>
                            </motion.p>
                            <motion.p className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover">
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=js" />
                                </a>
                            </motion.p>

                            <motion.p className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover">  <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=express" />
                                </a></motion.p>


                        </div>
                    </p>
                    <p><span className="font-bold text-[#DAFFFB] ">Features:</span>
                        <ul className="list-disc ml-10 text-[#DAFFFB]">
                            <li>User can add to cart or update product</li>
                            <li>User Friendly UI</li>
                            <li>Google Login System</li>
                            <li>Fully Device Responsive</li>
                        </ul>
                    </p>
                    <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-5">
                        <a href='https://travilo-guide.surge.sh/' target="blank" className="btn btn-outline shadow-[0_10px_15px_-3px_rgb(73,162,163)] hover:bg-[#176B87] text-[#DAFFFB]">Live Website Link</a>
                        <a href='https://github.com/Mouri199/travilo-guide-client' target="blank" className="btn btn-outline shadow-[0_10px_15px_-3px_rgb(73,162,163)] hover:bg-[#176B87] text-[#DAFFFB]">Client Site Repository</a>
                        <a href='https://github.com/Mouri199/travilo-guide-server' target="blank" className="btn btn-outline shadow-[0_10px_15px_-3px_rgb(73,162,163)] hover:bg-[#176B87] text-[#DAFFFB]">Server Site Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;