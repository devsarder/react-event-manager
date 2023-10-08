import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { signInUser, user } = useContext(AuthContext);
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((userCredential) => {
        const logIndUser = userCredential.user;
        console.log(logIndUser);
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        const errorMsg = error.message;
        const errorCode = error.code;
        setValidation(errorMsg);
        console.error(errorMsg, errorCode);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="w-1/3 mx-auto">
        <h2 className="text-center text-2xl font-semibold my-2">
          Login your account
        </h2>
        <form onSubmit={handleSignIn}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-400">Login</button>
              </div>
            </div>
          </div>
        </form>
        <p className="my-2 text-center">
          Do not have an account?Please
          <Link className="underline text-green-700  " to="/register">
            Register
          </Link>
        </p>
      </div>
      <div className="text-center  text-red-700 text-lg">
        <p className={user && "hidden "}>{validation}</p>
      </div>
    </div>
  );
};

export default Login;
