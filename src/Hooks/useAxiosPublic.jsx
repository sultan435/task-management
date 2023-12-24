import axios from "axios";

const axiosSecurePublic = axios.create({
    baseURL:"http://localhost:5000/api/v1"
})
const useAxiosPublic = () => {
    return axiosSecurePublic
};

export default useAxiosPublic;