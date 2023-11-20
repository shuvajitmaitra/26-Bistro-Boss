import logImage from "../../assets/others/authentication2.png";
import loginBg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state);
  const { userSignIn } = useContext(AuthContext);

  const [, setValid] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userSignIn(email, password)
      .then(() => {
        toast.success("Successfully user logged in!");

        navigate(location?.state ? location?.state?.from : "/");
      })
      .catch((error) => {
        toast.error(error.message.firebase, "Email/Password invalid");
        console.log(error.message);
      });
  };

  const handleCheck = (e) => {
    if (validateCaptcha(e.target.value)) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  return (
    <div style={{ backgroundImage: `url(${loginBg})` }}>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto flex justify-center items-center gap-20 h-screen p-20 font-mono">
        <div className="flex-1 border">
          <img
            src={logImage}
            alt=""
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-body flex-1 "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <div className="w-full text-end  flex justify-between border border-zinc-300 bg-white rounded-lg p-2">
              <LoadCanvasTemplate />
            </div>

            <label className="label">
              <span className="label-text">Captcha</span>
            </label>
          </div>

          <div className="form-control">
            <input
              type="text"
              name="captcha"
              onBlur={handleCheck}
              placeholder="write the captcha above"
              className="input input-bordered normal-case font-sans"
            />
            <input
              disabled={false}
              style={{ backgroundColor: "rgba(209, 160, 84, 0.70)" }}
              className="btn"
              type="submit"
              value="Login"
            />
          </div>
          <div>
            New here?{" "}
            <span className="font-bold">
              <Link to="/register">Create a new account</Link>
            </span>
          </div>
          <div className="divider"></div>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
