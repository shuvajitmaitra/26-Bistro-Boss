import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Title from "../../../Shared/Tilte/Title";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserSecret, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/users/${id}`)
        .then((res) => {
          if(res?.data?.deletedCount){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            refetch()
          }
        });
      }
    });
  };
  return (
    <div className="bg-red-200 min-h-screen py-5">
      <Title
        subTitle="---How many??---"
        mainTitle="MANAGE ALL USERS"
      ></Title>
      <div className="bg-white mx-20 p-10 rounded space-y-3">
        <p className="font-bold text-xl text-start">Total users: {users?.length}</p>
        <div className="overflow-x-auto rounded-t-xl">
          <table className="table ">
            {/* head */}
            <thead className="bg-red-200 ">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user?._id}>
                  <th>{index+1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role ? 
                   <span
                      className="btn w-fit  text-white bg-yellow-500 text-xl rounded flex justify-center items-center"
                    >
                      <FaUserSecret />
                    </span> 
                    :
                    <span
                      className=" btn w-fit text-white bg-green-500 text-xl rounded flex justify-center items-center"
                    >
                      <FaUsers />
                    </span> 
                    }</td>
                  <td>
                  <button
                      onClick={() => handleDelete(user._id)}
                      className=" btn text-white bg-red-500 text-xl rounded flex justify-center items-center"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AllUsers;
