import { motion } from "framer-motion";
import { Line } from "rc-progress";

const SKills = () => {
    const iconVariants = {
        hover: {
            scale: 1.2,
            transition: { duration: 0.3 },
        },
    };


    return (
        <div>
            <div className="lg:ml-[480px] lg:mx-24 px-5 lg:mt-28 mt-10">
                <h1 className="text-[#DAFFFB]  lg:text-5xl text-3xl  lg:mb-10  font-play">My Skills</h1>
                <div>
                    <div className="flex my-3 justify-between ">
                        <div className="flex gap-5 justify-between items-center">
                            <motion.p
                                className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=html" />
                                </a>  </motion.p>
                            <p className="text-[#DAFFFB]  lg:text-lg text-sm my-3">HTML</p>
                        </div>
                        <div>
                            <p className="text-[#DAFFFB]  text-lg my-3">80%</p>

                        </div>
                    </div>

                    <Line percent={80} strokeWidth={1.5} strokeColor="#176B87" />

                    <div className="flex my-3 justify-between">
                        <div className="flex gap-5 justify-between items-center">
                            <motion.p
                                className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=css" />
                                </a>  </motion.p>
                            <p className="text-[#DAFFFB]  lg:text-lg text-sm my-3">CSS</p>

                        </div>
                        <div>
                            <p className="text-[#DAFFFB]  text-lg my-3">70%</p>

                        </div>
                    </div>
                    <Line percent={70} strokeWidth={1.5} strokeColor="#176B87" />
                    <div className="flex my-3 justify-between">

                        <div className="flex gap-5 justify-between items-center">
                            <motion.p
                                className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=tailwind" />
                                </a>  </motion.p>
                            <p className="text-[#DAFFFB]  lg:text-lg text-sm my-3">Tailwind</p>

                        </div>
                        <div>
                            <p className="text-[#DAFFFB]  text-lg my-3">80%</p>

                        </div>
                    </div>

                    <Line percent={60} strokeWidth={1.5} strokeColor="#176B87" />

                    <div className="flex my-3 justify-between">
                        <div className="flex gap-5 justify-between items-center">
                            <motion.p
                                className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=js" />
                                </a>  </motion.p>
                            <p className="text-[#DAFFFB]  lg:text-lg text-sm my-3">JavaScript</p>

                        </div>
                        <div>
                            <p className="text-[#DAFFFB]  text-lg my-3">50%</p>

                        </div>
                    </div>
                    <Line percent={50} strokeWidth={1.5} strokeColor="#176B87" />
                    <div>
                        <div className="flex my-3 justify-between">
                            <div className="flex gap-5 justify-between items-center">
                                <motion.p
                                    className="text-4xl"
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    <a className='w-[40px]' href="https://skillicons.dev">
                                        <img src="https://skillicons.dev/icons?i=react" />
                                    </a>  </motion.p>
                                <p className="text-[#DAFFFB]  lg:text-lg text-sm my-3">React JS</p>

                            </div>
                            <div>
                                <p className="text-[#DAFFFB]  text-lg my-3">60%</p>

                            </div>
                        </div>


                        <Line percent={60} strokeWidth={1.5} strokeColor="#176B87" />

                    </div>
                    <div className="flex my-3 justify-between">
                        <div className="flex gap-5 justify-between items-center">
                            <motion.p
                                className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=mongodb" />
                                </a>  </motion.p>
                            <p className="text-[#DAFFFB]  lg:text-lg text-sm my-3">MongoDb</p>

                        </div>
                        <div>
                            <p className="text-[#DAFFFB]  text-lg my-3">40%</p>

                        </div>
                    </div>
                    <Line percent={40} strokeWidth={1.5} strokeColor="#176B87" />
                    <div className="flex my-3 justify-between ">
                        <div className="flex gap-5 justify-between items-center">
                            <motion.p
                                className="text-4xl"
                                variants={iconVariants}
                                whileHover="hover"
                            >
                                <a className='w-[40px]' href="https://skillicons.dev">
                                    <img src="https://skillicons.dev/icons?i=express" />
                                </a>  </motion.p>
                            <p className="text-[#DAFFFB]  lg:text-lg text-sm my-3">Express JS</p>

                        </div>
                        <div>
                            <p className="text-[#DAFFFB]  text-lg my-3">60%</p>

                        </div>
                    </div>

                    <Line percent={60} strokeWidth={1.5} strokeColor="#176B87" />

                </div>
            </div>
        </div>
    );
};

export default SKills;