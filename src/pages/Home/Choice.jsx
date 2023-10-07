import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Choice = ({ healthChoice }) => {
  const { img, title, description } = healthChoice;
  console.log(healthChoice);
  return (
    <div className=" flex flex-col shadow-md rounded-md text-center  p-2">
      <img className=" flex-grow object-cover rounded-sm w-full" src={img} alt="" />
      <Link className="text-2xl  my-3 font-semibold hover:text-green-400">
        {title}
      </Link>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Choice;

Choice.propTypes = {
  healthChoice: PropTypes.obj,
};
