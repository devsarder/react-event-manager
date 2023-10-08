import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ServiceDetails = () => {
  const service = useParams();
  const eventsData = useLoaderData();
  console.log(eventsData);
  console.log(service);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <img src="" alt="" />
        <p className="text-lg font-semibold">
          service details is not ready yet
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
