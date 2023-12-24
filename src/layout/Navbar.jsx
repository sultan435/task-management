import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../components/ui/Container";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user, logout } = useContext(AuthContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
 
    //for when scrolling, navbar will be sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    })

    const navItems = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? 'text-[#FF7594] underline font-bold uppercase' : 'text-base font-bold uppercase hover:text-[#FF7594] cursor-pointer'
        }>Home</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) =>
            isActive ? 'text-[#FF7594] underline font-bold uppercase' : 'text-base font-bold uppercase hover:text-[#FF7594] cursor-pointer'
        }>About</NavLink></li>
        <li><NavLink to='/dashboard/task' className={({ isActive }) =>
            isActive ? 'text-[#FF7594] underline font-bold uppercase' : 'text-base font-bold uppercase hover:text-[#FF7594] cursor-pointer'
        }>Dashboard</NavLink></li>
        {
            user ? <>
                <li><button onClick={logout} className= ' font-bold uppercase'
                >logOut</button></li>
            </> :
                <>
                    <li><NavLink to='/login' className={({ isActive }) =>
                        isActive ? 'text-[#FF7594] underline font-bold uppercase' : 'text-base font-bold uppercase hover:text-[#FF7594] cursor-pointer'
                    }>Login</NavLink></li>
                </>
        }
    </>

    return (
        <div className="bg-white">
            <Container>
                <nav className={`py-6 ${isSticky ? " fixed w-full top-0 left-0 right-0 rounded max-w-screen-xl mx-auto px-4 bg-gray-700 text-white  transition-all duration-300 ease-in" : " transition-all duration-300 ease-in"}`}>
                    {/* for large devices */}
                    <div className="flex justify-between items-center text-base gap-8">
                        <Link>
                            <div className="flex justify-center items-center">
                                <h5 className="text-3xl font-bold "><span className="text-[#FF7594]">Task </span> Master</h5>
                            </div>
                        </Link>

                        {/* menu item for large devices */}

                        <ul className="lg:flex space-x-12 hidden list-none">
                            {navItems}
                        </ul>
                        {/* menu btn, visible on mobile screen only */}
                        <div className="lg:hidden focus:outline-none transition-all ease-in duration-300">
                            <button
                                className="text-black"
                                onClick={toggleMenu}>
                                {
                                    isMenuOpen ? <FaXmark className="w-6 h-6"></FaXmark> : <FaBarsStaggered className="w-6 h-6"></FaBarsStaggered>
                                }
                            </button>
                        </div>
                    </div>

                    {/* navItem for small devices */}
                    <div className={`space-y-4 px-4 mt-20 md:mt-20 py-7 bg-gray-700 text-white shadow-lg ${isMenuOpen ? "block md:flex lg:hidden flex-col fixed top-0 right-0 left-0 list-none transition-all ease-in duration-300" : "hidden"}`}>
                        {navItems}
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;