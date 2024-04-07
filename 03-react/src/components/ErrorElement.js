import { useRouteError } from "react-router-dom";
export default ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oopsss..😬</h1>
      <h3>Something went wrong.</h3>
      <h4>
        {err.status}: {err.statusText}
      </h4>
    </div>
  );
};
