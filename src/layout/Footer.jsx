import Container from "../components/ui/Container";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-gray-700">
            <Container>
            <div className="py-6 flex justify-between flex-col lg:flex-row transition-all duration-300 ease-in">
                    <div className="space-y-8 mb-10">
                        <div>
                            <Link to="/"><h2 className="text-white text-4xl font-bold "><span className="text-[#FF7594]">Task</span>  Master</h2></Link>
                        </div>
                        <div className="">
                            <p className="text-white font-bold text-lg">Location:<span className="text-white font-medium"> av. Washington 165, NY CA 54003</span></p>
                            <p className="text-white font-bold text-lg">Phone:<span className="text-white font-medium"> +8801833225351</span></p>
                            <p className="text-white font-bold text-lg">Email:<span className="text-white font-medium"> sultanmahmud5998@email.com</span></p>
                            <p className="text-white font-bold text-lg">Opening hours:<span className="text-white font-medium"> 9:00 AM - 5:00PM</span></p>
                        </div>
                       
                    </div>
                    <div className="space-y-8 mb-10">
                        <h2 className="text-white text-2xl font-bold ">Contact</h2>
                        <div >
                            <ul className="text-white text-lg space-y-3 font-medium">
                                
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>Create task</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-8 mb-10">
                        <h2 className="text-white text-2xl font-bold ">Task</h2>
                       <div className="text-white text-lg space-y-3 font-medium">
                        <ul>
                        <li>Full Stack Development</li>
                            <li>Mern Stack Development</li>
                            <li>Front-End Development</li>
                            <li>React Development</li>
                           
                        </ul>
                       </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-white text-2xl lg:text-center font-bold ">Social</h2>
                        <div>
                            <div className='flex items-center mb-2 md:mb-0 gap-3'>
                                <span className='cursor-pointer text-white bg-[#FF7594] p-2 text-2xl rounded-full'><FaFacebookF /></span>
                                <span className='cursor-pointer text-white bg-[#FF7594] p-2 text-2xl rounded-full'><FaTwitter /></span>
                                <span className='cursor-pointer text-white bg-[#FF7594] p-2 text-2xl rounded-full'><BsYoutube /></span>
                                <span className='cursor-pointer text-white bg-[#FF7594] p-2 text-2xl rounded-full'><AiOutlineInstagram /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="">
                <p className="text-white border-t border-[#CED5F1] text-center py-6">© 2022 ENVALAB. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;