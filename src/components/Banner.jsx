import { Link } from "react-router-dom";
import Container from "./ui/Container";
import banner from '../assets/banner/banner.jpg'

const Banner = () => {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row gap-4 pt-10 lg:gap-16 transition-all duration-300 ease-in'>
                <div className='flex-1 flex flex-col items-start justify-center py-2 '>
                    <h1 className='text-4xl font-bold text-start mb-2'><span className="text-[#FF7594]">Task </span>Management </h1>
                    <h3 className="text-xl font-medium">Developer Your Career</h3>
                    <p className='mt-3 max-w-[65ch] text-gray-800 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid mollitia excepturi est a ipsum cupiditate ea possimus eveniet pariatur!</p>
                    <div className="mt-6">
                        <Link to="/dashboard/task" >
                            <button className="bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] px-4 py-3 rounded-lg text-black font-medium">Let's Explore</button>
                        </Link>
                    </div>
                </div>
                <div className='flex-1 h-[600px] w-full rounded-lg overflow-hidden'>
                    <img src={banner} className='w-full h-full object-cover' alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;