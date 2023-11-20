import { useQuery } from "@tanstack/react-query";
import Title from "../../../Shared/Tilte/Title";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserSecret, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users, refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

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
        axiosSecure.delete(`/users/${id}`)
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

  const handleMakeAdmin=(id, name)=>{
    Swal.fire({
        title: "Are you sure?",
        text: `Do you want to make an Admin`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/admin/${id}`)
          .then((res) => {
            if(res?.data?.modifiedCount){
              Swal.fire({
                title: "Admin!",
                text: `${name} is a Admin now!`,
                icon: "success"
              });
              refetch()
            }
          });
        }
      });
  }
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
                    onClick={() => handleMakeAdmin(user?._id, user?.name)}
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
