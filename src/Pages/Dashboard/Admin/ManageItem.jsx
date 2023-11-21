import { RiDeleteBin6Line } from "react-icons/ri";
import Title from "../../../Shared/Tilte/Title";
import useMenu from "../../../Hook/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menus, isLoading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/menuDelete/${id}`).then((res) => {
          if (res?.data?.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="bg-[#F6F6F6]">
      <Title
        subTitle="---Hurry Up!---"
        mainTitle="MANAGE ALL ITEMS"
      ></Title>
      <div className="m-10 p-10 bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-start mb-5">
          Total Order: {menus?.length}
        </h2>
        {isLoading && (
          <div className="h-screen flex justify-center items-center">
            <progress className="progress w-56"></progress>
          </div>
        )}
        <div className="overflow-x-auto rounded-t-lg ">
          <table className="table py-10">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054]  font-bold text-white">
                <th>
                  <label>#</label>
                </th>
                <th>Item Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menus?.map((singleCart, index) => (
                <tr key={singleCart._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center justify-between gap-3">
                      <div className="avatar">
                        <div className=" rounded-2xl w-12 h-12">
                          <img src={singleCart.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{singleCart.name}</div>
                  </td>
                  <td> $ {singleCart.price}</td>
                  <td>
                   <Link to={`/dashboard/updateItem/${singleCart._id}`}>
                   <button
                      className=" btn text-white bg-[#D1A054]  text-xl rounded flex justify-center items-center"
                    >
                      <FaEdit />
                    </button>
                   </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(singleCart._id)}
                      className=" btn text-white bg-red-500 text-xl rounded flex justify-center items-center"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ManageItem;
