import { SiMaterialdesignicons } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

const Services = () => {
    return (
        <div className=" lg:ml-[480px] lg:mt-24 mt-10 text-left px-5 ">
            <div>

                <h1 className="font-play lg:text-5xl text-3xl my-5 text-[#DAFFFB]">What I Services</h1>
                <p className="fornt-work text-xl lg:mr-32 mx-auto text-[#DAFFFB] ">
                    I design websites that work on any device and create enjoyable experiences for users. I create customized solutions to improve how users interact with your website and make your brand more appealing.</p>
            </div>

            <div className="grid mb-10 lg:grid-cols-3 md:grid-cols-2 md:gap-10 grid-cols-1 gap-6 mt-10 lg:mx-10  ">
                <div className=" card  w-96 md:w-[300px]  shadow-xl">
                    <div className="card-body text-center rounded-lg bg-[#176B87] text-white">

                        <div className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1">
                            <p className="text-3xl ml-[95px] items-center flex justify-center hover:bg-[#04364A] rounded-full w-[60px] h-[40px]"> <SiMaterialdesignicons /></p>
                            <h2 className="lg:text-2xl font-medium font-work">Website Design</h2>
                            <p>I can make websites from start to finish! I handle everything, like how the website looks, how it works on the front, what happens behind the scenes, and connecting it to a database.</p>
                        </div>
                    </div>
                </div>
                <div className=" card  w-96 md:w-[300px] shadow-xl">
                    <div className="card-body text-center rounded-lg bg-[#176B87] text-white">

                        <div className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1">
                            <p className="text-3xl ml-[95px] items-center flex justify-center hover:bg-[#04364A] rounded-full w-[60px] h-[40px]">  <FaLaptopCode /></p>
                            <h2 className="lg:text-2xl font-medium font-work">Website Maintenance</h2>
                            <p>I help keep your website in good shape. I make sure it works well and stays current. I do things like saving your info regularly, keeping it secure, updating the content, and making sure it runs fast. </p>
                        </div>
                    </div>
                </div>
                <div className=" card  w-96 md:w-[300px] shadow-xl">
                    <div className="card-body text-center rounded-lg bg-[#176B87] text-white">

                        <div className="transition ease-in-out hover:scale-110 duration-300 hover:-translate-y-1">
                            <p className="text-3xl ml-[95px] items-center flex justify-center hover:bg-[#04364A] rounded-full w-[60px] h-[40px]"> <MdDeveloperMode /></p>
                            <h2 className="lg:text-2xl font-medium font-work">React App Development</h2>
                            <p>I'm really good at creating cool and easy-to-use websites that work well on all devices. I use a special tool called React to make them extra awesome. Whether you need a simple one-page site or a more complicated design. </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;