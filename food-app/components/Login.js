import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </form>
      </div>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Login;
