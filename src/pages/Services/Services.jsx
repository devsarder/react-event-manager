import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Service from "./Service";

const Services = () => {
  const servicesData = useLoaderData();
  console.log(servicesData);
  return (
    <div className="max-w-6xl mx-auto ">
      <Navbar></Navbar>

      <div className=" my-10  lg:grid  gap-2 grid-cols-3">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
