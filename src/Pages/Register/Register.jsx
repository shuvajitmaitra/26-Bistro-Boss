import logImage from "../../assets/others/authentication2.png";
import loginBg from "../../assets/others/authentication.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, logOut } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateProfile(auth.createUser, {
          name: data.name,
        })
          .then(() => {
            logOut()
              .then(() => {
                const userInfo = {
                  name: data.name,
                  email: data.email,
                };
                axiosPublic.post("/users", userInfo).then((res) => {
                  if (res.data.insertedId) {
                    toast.success("Successfully user created!");
                    navigate("/login");
                  }
                });
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div style={{ backgroundImage: `url(${loginBg})` }}>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-20 h-screen p-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body flex-1 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              name="name"
              className="input input-bordered"
              required
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              name="email"
              className="input input-bordered"
              required
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              })}
              placeholder="password"
              className="input input-bordered"
              required
            />
            {errors.password?.type == "pattern" && (
              <span className="text-red-500">Password Pattern not matched</span>
            )}
            {errors.password?.type == "required" && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              style={{ backgroundColor: "rgba(209, 160, 84, 0.70)" }}
              className="btn"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div>
            Already have an account?     <span className="font-bold"><Link to="/login"> Go to login</Link></span>
          </div>
          <div  className="divider"></div>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </form>
        <div className="flex-1 border">
          <img
            src={logImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
