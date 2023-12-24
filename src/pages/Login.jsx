import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loggedUser, googleUser } = useContext(AuthContext);
    const axiosSecurePublic = useAxiosPublic()

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from.pathname || '/'

    const onSubmit = (data) => {
        loggedUser(data.email, data.password)
            .then(result => {
                console.log('user login successfully', result.user)
                navigate(from, { replace: true })
            })
    }

    const handleGoogleLogin = (googleProvider) =>{
        googleUser(googleProvider)
        .then((result) =>{
            console.log(result.user)
            const user = {
                email: result.user.email,
                name: result.user.displayName,
                image: result.user.photoURL,
            }
            axiosSecurePublic.post('/users-info', user)
                    .then(res => {
                        if (res.data.insertedId || res.data.insertedId === null) {
                            // console.log('user added to the database');
                            navigate('/')
                        }
                    })
        })
    }

    return (
        <div>
            <div className="bg-[#f2f2f2] py-10">
                <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white px-4 md:px-10 lg:px-12 py-16 rounded-lg">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl text-[#403F3F] font-semibold">LOGIN</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-8">

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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="rounded-xl text-gray-800 text-base w-full font-medium bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] py-3 px-6 my-3">LOGIN</button>
                            </div>

                        </div>
                    </form>
                    {/* <div className="text-center mt-6">
                        {
                            loginError && <p className="text-red-600">{loginError}</p>
                        }
                    </div> */}
                    <p className="text-center">OR</p>
                    <div className="">
                        <button onClick={handleGoogleLogin} className="btn w-full bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] my-3">
                            <FaGoogle></FaGoogle>
                            Sign in with Google
                        </button>
                    </div>

                    <p className="text-center text-gray-800 font-semibold">Don’t Have An Account ? <Link className="text-[#FF7594]" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;