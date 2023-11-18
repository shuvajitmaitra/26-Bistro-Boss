import useAuth from "../../Hook/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
const {googleSignIn} = useAuth() 

const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(res=>{
        console.log(res.user);
        const userInfo= {
            name: res.user?.displayName,
            email: res.user?.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                toast.success("User create successfully!")
            }
        })
    })
    .catch(error=>{
        console.log(error.message);
    })
}
    return(
        <div onClick={handleGoogleSignIn} className="flex justify-center items-center gap-3 cursor-pointer py-2 bg-[#D1A054] w-full rounded">
           <FcGoogle className="text-2xl"/> Sign In with Google  
        </div>
    )}
export default SocialLogin;