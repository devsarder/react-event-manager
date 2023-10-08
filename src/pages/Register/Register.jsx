import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate(null);
  //   console.log(user, createUser);
  const notify = () =>
    toast("congratulations ,you have been registered successfully!");
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).{6,32}$");
    // const isOk = re.test(password);

    console.log(email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user) {
          navigate("/login");
        }
        notify();
        e.target.reset();
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="w-1/3 mx-auto">
        <ToastContainer></ToastContainer>
        <h2 className="text-center text-2xl font-semibold my-2">
          Register your account
        </h2>
        <form onSubmit={handleRegistration}>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-400">Register</button>
              </div>
            </div>
          </div>
        </form>
        <p className="my-2 text-center">
          Already have an account?Please
          <Link className="underline text-green-700  " to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
