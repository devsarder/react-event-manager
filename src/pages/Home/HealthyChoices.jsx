import { useEffect, useState } from "react";
import Choice from "./Choice";

const HealthyChoices = () => {
  const [healthChoices, setHealthChoices] = useState([]);
  const [dataLength, setDataLength] = useState(6);

  useEffect(() => {
    fetch("health.json")
      .then((res) => res.json())
      .then((data) => setHealthChoices(data));
  }, []);
  //   console.log(healthChoices);
  return (
    <div className="max-w-6xl mx-auto my-10 space-y-4">
      <div className="text-center ">
        <h2 className="text-4xl font-semibold">Your Healthy Choices</h2>
        <p className="lg:px-64 my-4">
          Lorem ipsum dolor sit amet facilisis sed vitae lorem pede at eu arcu
          vulputate metus luctus ut quis vivamus vitae id habitasse et morbi
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {healthChoices.slice(0, dataLength).map((healthChoice) => (
          <Choice healthChoice={healthChoice} key={healthChoice.id}></Choice>
        ))}
      </div>

      <div className={dataLength === healthChoices.length && 'hidden'}>
          <div className=" text-center">
            <button
              onClick={() => setDataLength(healthChoices.length)}
              className=" bg-green-400 rounded-md px-3 py-2 text-lg font-semibold underline  text-white"
            >
              Next..
            </button>
          </div>
      </div>
    </div>
  );
};

export default HealthyChoices;
