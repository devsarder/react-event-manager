/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  console.log(service);
  const { title, img, id } = service;
  return (
    <div className=" flex flex-col shadow-md rounded-md text-center  p-2">
      <img
        className=" flex-grow object-cover rounded-sm w-full"
        src={img}
        alt=""
      />
      <Link className="text-2xl  my-3 font-semibold hover:text-green-400">
        {title}
      </Link>
      <Link to={`/service/${id}`}>
        <button className="btn bg-green-400 mt-3">Book Now</button>
      </Link>
    </div>
  );
};

export default Service;
