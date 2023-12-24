import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="flex">
            <div className="bg-white h-[100vh] px-7">
                <div className="pt-10 pb-4 flex flex-col justify-center items-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full border-2 border-[#FF7594]">
                            {
                                user && <img src={user?.photoURL} alt="" />
                            }
                        </div>
                    </div>
                    <h1 className="text-lg font-semibold">{user?.displayName}</h1>
                    <p>{user?.email}</p>
                </div>
                <div>
                    <ul className="flex flex-col gap-5">
                        <NavLink to='/dashboard/task'><li className="flex items-center gap-4 text-[#FF7594] text-base"><span className="text-xl"><MdDashboardCustomize /></span> Dashboard</li></NavLink>
                        <NavLink to='/dashboard/profile'><li className="flex items-center gap-4 text-base"><span className="text-xl"><FaRegUser /></span>My Profile</li></NavLink>
                        <li className="flex items-center gap-4 text-base"><span className="text-xl"><IoSettingsOutline /></span>Settings</li>
                        <div className="divider"></div>
                        <NavLink to='/'><li className="flex items-center gap-4 text-base"><span className="text-xl"><FiHome /></span>Home</li></NavLink>
                        <li className="flex items-center gap-4 text-base"><span className="text-xl"><IoIosMail /></span>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 px-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;