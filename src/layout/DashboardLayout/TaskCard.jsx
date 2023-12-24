import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const TaskCard = ({ task,refetch }) => {
    const { title, description, priority, deadline, _id } = task;
    const axiosSecurePublic = useAxiosPublic()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecurePublic.delete(`/user-task/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Task has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div className="bg-white shadow-xl border border-[#FF7594] rounded p-4">
            <h1 className="text-lg font-semibold text-[#FF7594] uppercase">{title}</h1>
            <p >{description}</p>
            <p className="text-base font-medium">Priority:<span className="font-normal">{priority}</span></p>
            <div className="flex justify-between">
                <p className="text-base font-medium">DeadLine:<span className="font-normal">{deadline}</span></p>
                <div className="">
                    <button onClick={() => handleDelete(_id)} className="mr-3 bg-[#FF7594] p-1 rounded-full text-white text-lg"><span><MdDelete /></span></button>
                    <Link to={`/dashboard/updateTask/${_id}`}>
                    <button className="bg-gray-500 p-1 rounded-full text-white text-lg"><span><CiEdit /></span></button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default TaskCard;