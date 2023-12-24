import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-gray-100 h-[100vh] p-8">
            <div className=" py-8 px-12 bg-[#FDDAD6] rounded-md">
                <div>
                    <div className="avatar">
                        <div className="w-36 rounded-full border-2 border-[#FF7594]">
                            {
                                user && <img src={user?.photoURL} alt="" />
                            }
                        </div>
                    </div>
                </div>
                <div className="space-y-3 mt-6">
                    <h1 className="text-base font-medium text-[#FF7594]">Name: <span className="text-black font-medium">{user?.displayName}</span></h1>
                    <h3 className="text-base font-medium text-[#FF7594]">Email: <span className="text-black font-medium">{user?.email}</span></h3>
                    <p className="text-base font-medium text-[#FF7594]">Home: <span className="text-black font-medium">Set Your Home</span></p>
                    <p className="text-base font-medium text-[#FF7594]">Age: <span className="text-black font-medium">Set Your Age</span></p>
                    <p className="text-base font-medium text-[#FF7594]">Education: <span className="text-black font-medium"> Set Your Education</span></p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;