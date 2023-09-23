import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oopss..😬</h1>
      <h3>There's an issue...Try again later</h3>
      <h6>{err.status + " : " + err.statusText}</h6>
    </div>
  );
};

export default Error;
