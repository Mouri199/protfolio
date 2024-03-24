

import { Link } from "react-scroll";
import App from "./App";

import scrolUp from './assets/scroll-top.svg'

import About from "./About";
import Banner from "./Banner";
import Education from "./Education";
import Services from "./Services";
import Contact from "./Contact";
import SKills from "./SKills";



const Home = () => {

    return (
        <>
            <section className="bg-[#04364A] overflow-hidden "  >

                <div id='home'>
                    <Banner></Banner>
                </div>

                <hr className="lg:ml-[520px] ml-24 lg:block hidden w-[400px]" />


                <div id='about'>
                    <About></About>
                </div>


                <div id='education'>
                    <Education></Education>
                </div>

                <div>
                    <SKills></SKills>
                </div>

                <div id='services'>
                    <Services></Services>
                </div>

                <div id="project">
                    <App></App>
                </div>


                <div id="contact">

                    <Contact></Contact>
                </div>




                <div className="">
                    <footer className="z-1 footer footer-center p-4 bg-[#04364A] text-[#DAFFFB]">
                        <aside>
                            <p>Copyright © 2023 - All right reserved by Shanjida Moury</p>
                        </aside>
                    </footer>
                </div>

                {/* <div>
                        <Link to='home'><img className="bg-[#DAFFFB] rounded-full w-[100px]" src={scrolUp} alt="" /></Link>
                    </div> */}


            </section>


        </>
    );
};

export default Home;