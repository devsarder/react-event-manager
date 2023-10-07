import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaClock,
  FaPhone,
  FaLocationArrow,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-green-400 ">
      <div className=" max-w-6xl grid grid-cols-1  lg:flex justify-between mx-auto text-white font-semibold">
        <div className="flex gap-1 items-center">
          <FaClock className="align-baseline"></FaClock>
          <p className="mb-1">
            <small>Mon-Fri 9.00-17.00 Sunday CLOSED</small>
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <FaPhone className="align-baseline"></FaPhone>
          <p className="mb-1">
            <small>1-1677-124</small>
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <FaLocationArrow className="align-baseline"></FaLocationArrow>
          <p className="mb-1">
            <small>Cost Masnaga ,Italy</small>
          </p>
        </div>
        <div>
          <select className="select   bg-green-400 max-w-xs">
            <option disabled selected>
              English
            </option>
            <option>Italian</option>
            <option>French</option>
          </select>
        </div>
        <div className="flex gap-2 items-center text-lg">
          <Link>
            <FaFacebook></FaFacebook>
          </Link>
          <Link>
            <FaInstagram></FaInstagram>
          </Link>
          <Link>
            <FaTwitter></FaTwitter>
          </Link>
          <Link>
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
