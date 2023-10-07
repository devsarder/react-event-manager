import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError;

  return (
    <div id="error-page " className="text-center space-y-3">
      <h1 className="text-8xl">Oops!</h1>
      <p className="text-4xl font-semibold">Sorry,The page you are looking for does not exist..</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-outline outline-green-500"> Go Back To Our Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
