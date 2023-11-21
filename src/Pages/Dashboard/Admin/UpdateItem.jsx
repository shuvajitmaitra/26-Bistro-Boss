import { useForm } from "react-hook-form";
import Title from "../../../Shared/Tilte/Title";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData,  } from "react-router-dom";
const image_api_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

const UpdateItem = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm();
    const { name, category, recipe, price, _id } = useLoaderData();
    
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log(res.data.data.display_url);
    if (res?.data?.success) {
      const dataList = {
        name: data?.name,
        category: data?.category,
        recipe: data?.recipe,
        price: parseFloat(data?.price),
        image: res.data?.data?.display_url,
      };
      const response = await axiosSecure.patch(`/menuUpdate/${_id}`, dataList);
      if (response.data.modifiedCount) {
        toast.success("Menu Updated");
      }
    }
  };
  return (
    <div className="min-h-screen py-5">
      <Title
        mainTitle="Update an Item"
        subTitle="New Update?"
      ></Title>
      <div className="p-10 bg-zinc-200 m-10 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              defaultValue={name}
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                defaultValue={price}
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button
            type="submit"
            className="btn"
          >
            Update Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};
export default UpdateItem;
