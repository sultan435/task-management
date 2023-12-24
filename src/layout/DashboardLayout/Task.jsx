import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import TaskCard from "./TaskCard";

const Task = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm()
    const axiosSecurePublic = useAxiosPublic()
    const {user} = useContext(AuthContext)

    const { data: myTask = [],refetch} = useQuery({
        queryKey: ["my-task", user],
        queryFn: async () => {
            const res = await axiosSecurePublic.get(`/user-task?email=${user.email}`)
            return res.data
        }
    }) 
    console.log(myTask);

    const onSubmit = async (data) => {
        console.log(data);
        const taskItem = {
            title:data.title,
            priority:data.priority,
            deadline:data.deadline,
            description:data.description,
            email:user.email,

        }
        const res = await axiosSecurePublic.post('/user-task', taskItem)
        console.log(res)
        if(res.data.insertedId){
            reset()
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Task is added ",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="">
            <h1 className="text-3xl text-center py-4 bg-gray-400 font-medium mb-5 rounded">Welcome to task management application</h1>
            <div className="flex justify-between mb-4">
                <h3 className="text-base font-semibold border px-4 py-2 rounded-lg">Total Task: {myTask.length}</h3>
                <button className="btn text-red-500" onClick={() => document.getElementById('my_modal_5').showModal()}>Create new task <span><FaRegEdit /></span></button>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-5">
                <div className="">
                   
                        <h1 className="text-center py-4 bg-gray-300 font-medium rounded">To Do</h1>
                    
                    <div className="space-y-3 mt-3">
                        {
                            myTask.map(task=><TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>)
                        }
                    </div>
                </div>

                <div className=" ">
                    <h1 className="text-center  py-4 bg-gray-300 font-medium rounded">Ongoing</h1>
                    <div className="space-y-3 mt-3 bg-gray-300 h-[136px]  shadow-xl border border-[#FF7594] rounded p-4">

                    <h3>Coming soon...</h3>
                    </div>
                </div>
                <div className=" ">
                    <h1 className="text-center  py-4 bg-gray-300 font-medium rounded">Completed</h1>
                    <div className="space-y-3 mt-3 bg-gray-300 h-[136px]  shadow-xl border border-[#FF7594] rounded p-4">

                    <h3>Coming soon...</h3>
                    </div>
                </div>
               
            </div>
            <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                           
                            <div>
                                <h1 className="text-center text-lg font-semibold text-[#FF7594]">Create Task</h1>
                            </div>
                            <div className="border my-3"></div>
                            <div className='w-full'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Title</span>
                                </label>
                                <input type="text" {...register("title", { required: true })} placeholder="Enter Name" className="w-full border border-slate-400 py-3 px-4 bg-white my-1 outline-none rounded-xl" />
                                {errors.title && <span className='text-red-500'>Title is required</span>}
                            </div>
                            <div className='w-full'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Priority</span>
                                </label>
                                <select defaultValue="default" {...register("priority", { required: true })} className="w-full border border-slate-400 py-3 px-4 bg-white my-1 outline-none rounded-xl">
                                    <option disabled selected>Priority</option>
                                    <option value="Low">low</option>
                                    <option value="Moderate">moderate</option>
                                    <option value="High">high</option>
                                    <option value="Others">others</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">DeadLine</span>
                                </label>
                                <select defaultValue="default" {...register("deadline", { required: true })} className="w-full border border-slate-400 py-3 px-4 bg-white my-1 outline-none rounded-xl">
                                    <option value="24-26">24-26</option>
                                    <option value="23-25">23-25</option>
                                    <option value="23-25">23-25</option>
                                    <option value="23-28">23-28</option>
                                    <option value="23-30">23-30</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label >
                                    <span className="text-base pl-1 text-gray font-medium">Description</span>
                                </label>
                                <textarea className="w-full border border-slate-400 py-3 px-4 bg-white my-1 outline-none rounded-xl" placeholder="Enter Long Description" {...register("description", { required: true })} id="" cols="30" rows="3"></textarea>
                                {errors.description && <span className='text-red-500'>Description is required</span>}
                            </div>



                            {/* <input method="dialog" className=" px-4 py-3 cursor-pointer bg-[#e41f05] text-white rounded-lg font-medium mt-4 w-full" type="submit" value="Submit" onClick={() => document.getElementById('my_modal_5').close()} /> */}
                            <input method="dialog" type="submit" value="create Task" className='py-4 mt-4 outline-none cursor-pointer w-full rounded-lg bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] text-black text-lg font-bold' onClick={() => document.getElementById('my_modal_5').close()} />
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Task;