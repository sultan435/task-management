import Container from "./ui/Container";
import img from '../assets/banner/Optimized-19362653 (1).jpg'
import { Link } from "react-router-dom";

const Features = () => {
    return (
       <div className="mb-16">
         <Container>
            <div className="pb-8">
                <h1 className="text-[#FF7594] uppercase font-medium text-center mb-3">Development</h1>
                <h3 className="text-4xl uppercase text-center">Only for developer</h3>
                <div className="border border-[#FF7594] my-3 md:w-[450px] lg:w-[450px] mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-4 items-center">
                <div className="flex-1">
                    <img src={img} alt="" />
                </div>
                <div className="flex-1 ">
                    <h1 className="text-2xl font-semibold mb-3">Developer can be use This site</h1>
                    <p>This site is for developers only. What would you do if you could work from work?
                        You can see your dashboard by pressing the Dia button for better understanding.</p>
                        <div className="mt-5 text-base font-semibold text-[#FF7594]">
                            <li>Full Stack Development</li>
                            <li>Mern Stack Development</li>
                            <li>Front-End Development</li>
                            <li>React Development</li>
                            <li>React Native Development</li>
                        </div>
                        <div className="mt-6">
                        <Link to="/dashboard/task" >
                            <button className="bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] px-4 py-3 rounded-lg text-black font-medium">Let's Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
       </div>
    );
};

export default Features;