import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser,updateUserProfile } = useContext(AuthContext)

    const axiosSecurePublic = useAxiosPublic()
    const navigate = useNavigate()


    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.photo[0] }
        const res = await axiosSecurePublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        console.log(res)
        if (res.data.success) {
            createUser(data.email, data.password)
                .then(result => {
                    console.log(result.user);
                    updateUserProfile(data.name, res.data.data.display_url)
                    .then(()=>{
                        const user ={
                            name:data.name,
                            email:data.email,
                            image:res.data.data.display_url
                        }
                        axiosSecurePublic.post('users-info', user)
                        .then(res =>{
                            if(res.data.insertedId){
                                console.log('user added to the database')
                                navigate('/')
                            }
                        })
                    })
                })
        }


    }

    return (
        <div>
            <div className="bg-[#f2f2f2] py-10 px-3">
                <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white px-4 md:px-10 lg:px-12 py-16 rounded-lg">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl text-[#FF7594] font-semibold">Register</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="px-3 mt-8">
                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Your Name"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                                {errors.name && <span className='text-red-700'>Name field is required</span>}
                            </div>
                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Photo URL</span>
                                </label>
                                <input
                                    type="file"
                                    {...register("photo", { required: true })}
                                    placeholder="Photo URL"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" />
                                {errors.photo && <span className='text-red-500'>Photo is required</span>}
                            </div>
                            <div className="">
                                <label>
                                    <span className="text-[#403F3F] font-semibold ml-2">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="">
                                <label >
                                    <span className="text-[#403F3F] font-semibold ml-2">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        placeholder="Password"
                                        className="border rounded-lg py-3 px-4 bg-white my-2 w-full" required />
                                    {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-red-500'>Password is 6 less then </span>}
                                    {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password is less then 20 character</span>}
                                    {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have one uppercase, one lower case, one number and one special character</span>}
                                    <span className="absolute top-6 right-7" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                {/* {
                                    registerError && <p className="text-red-600 font-medium">{registerError}</p>
                                } */}
                                <div className="my-5">
                                    <input className="ml-2" type="checkbox" name="terms" id="" />
                                    <label >
                                        <a href="#" className="ml-2">I agree all statements in <span>Terms of service</span></a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control">
                                <button className="rounded-xl text-gray-800 text-xl font-medium bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] py-3 px-6">REGISTER</button>
                            </div>
                            {/* {
                                success && <p className="text-green-600 font-medium">{success}</p>
                            } */}
                        </div>
                    </form>
                    <p className="mt-7 text-center text-[#403F3F] font-semibold">Have already an account ? <Link className="text-[#FF7594]" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;