import { motion } from "framer-motion";
import project1 from '../assets/entice .png'

const Entice = () => {
    const iconVariants = {
        hover: {
            scale: 1.2,
            transition: { duration: 0.3 },
        },
    };
    return (
        <div>
            <div className="mt-10 mb-20 lg:flex justify-between items-center md:gap-10 ">
                <img src={project1} alt="" className="md:w-1/2 " />
                <div className="space-y-5 md:mt-5 lg:mx-0 md:mx-10">
                    <h1 className="mt-5 md:mt-0 text-xl md:text-3xl font-bold text-[#DAFFFB]">Beauty Care Website</h1>
                    <p className="text-lg md:text-xl"><span className="font-bold text-[#DAFFFB]">Technologies Used:</span>
                        <div className='flex gap-3 my-3 justify-center'>
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
                        <a href='https://entice-ff6e8.web.app/' target="blank" className="btn btn-outline shadow-[0_10px_15px_-3px_rgb(73,162,163)] hover:bg-[#176B87] text-[#DAFFFB]">Live Website Link</a>
                        <a href='https://github.com/Mouri199/beauty-brand-shop' target="blank" className="btn btn-outline shadow-[0_10px_15px_-3px_rgb(73,162,163)] hover:bg-[#176B87] text-[#DAFFFB]">Client Site Repository</a>
                        <a href='https://github.com/Mouri199/brand-shop-server' target="blank" className="btn btn-outline shadow-[0_10px_15px_-3px_rgb(73,162,163)] hover:bg-[#176B87] text-[#DAFFFB]">Server Site Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Entice;