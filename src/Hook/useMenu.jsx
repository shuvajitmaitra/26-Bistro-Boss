import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () => {
  const axiosSecure = useAxiosSecure()
    const {data: menus, isLoading} = useQuery({
      queryKey: ['menu'],
      queryFn: async()=>{
        const res = await axiosSecure.get("/menu")
        return res.data
      }
    })

    return [menus, isLoading];
}
export default useMenu;