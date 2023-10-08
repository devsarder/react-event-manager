import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Service from "./Service";

const Services = () => {
  const servicesData = useLoaderData();
  console.log(servicesData);
  return (
    <div className="max-w-6xl mx-auto ">
      <Navbar></Navbar>

      <div className="text-center">
        <h2 className="text-6xl font-semibold">Our Services</h2>
        <p className="text-gray-400 lg:px-80 my-4">
          Lorem ipsum dolor sit amet facilisis sed vitae lorem pede at eu arcu
          vulputate metus luctus ut quis vivamus vitae id habitasse et morbi
        </p>
      </div>

      <div className=" my-10  lg:grid  gap-2 grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
