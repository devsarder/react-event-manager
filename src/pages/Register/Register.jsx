import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  return (
    <div>
      < Navbar />

      <div className="w-1/3 mx-auto">
        <h2 className="text-center text-2xl font-semibold my-2">
          Register your account
        </h2>
        <form>
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
