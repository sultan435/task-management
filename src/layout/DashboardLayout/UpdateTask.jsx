import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const UpdateTask = () => {
    const { register, handleSubmit } = useForm()
    const params = useParams()
    const axiosSecurePublic = useAxiosPublic()

    const { data: task = [] } = useQuery({
        queryKey: ["task-details"],
        queryFn: async () => {
            const res = await axiosSecurePublic.get(`/users-task/${params.id}`)
            return res.data;
        }
    })
    console.log(task);
    const { title, description, priority, deadline, _id} = task;

    
 
    const onSubmit = async (data) => {
        console.log(data);
        const taskItem = {
            title: data.title,
            priority: data.priority,
            deadline: data.deadline,
            description: data.description,

        }
        const updateTask = await axiosSecurePublic.patch(`/user-task-update/${_id}`, taskItem)
        if (updateTask.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Task is update to the pet item',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
        return (
            <div className="px-20 py-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="pb-8">
                        <h1 className="text-center text-2xl font-semibold text-[#FF7594] uppercase">Update Task</h1>
                    </div>

                    <div className='w-full'>
                        <label >
                            <span className="text-base pl-1 text-gray font-medium">Title</span>
                        </label>
                        <input type="text" defaultValue={title} {...register("title", { required: true })}  className="w-full border border-slate-400 py-3 px-4 bg-white my-1 outline-none rounded-xl" />

                    </div>
                    <div className='w-full'>
                        <label >
                            <span className="text-base pl-1 text-gray font-medium">Priority</span>
                        </label>
                        <select defaultValue={priority} {...register("priority", { required: true })} className="w-full border border-slate-400 py-3 px-4 bg-white my-1 outline-none rounded-xl">
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
                        <select defaultValue={deadline} {...register("deadline", { required: true })} className="w-full border border-slate-400 py-3 px-4 bg-white my-1 outline-none rounded-xl">
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
                        <textarea defaultValue={description} className="w-full border border-slate-400 py-3 px-4 bg-white my-1 outline-none rounded-xl" {...register("description", { required: true })} id="" cols="30" rows="3"></textarea>

                    </div>
                    <input  type="submit" value="Update Task" className='py-4 mt-4 uppercase outline-none cursor-pointer w-full rounded-lg bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] text-black text-lg font-bold' />
                </form>
            </div>
        );
    };

    export default UpdateTask;