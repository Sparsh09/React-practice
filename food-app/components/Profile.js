import { useState } from "react";

const Profile = (props) => {
  const name = props.name;
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Profile</h1>
      <h2>{name}</h2>
      <h4>Count : {count}</h4>
      <button onClick={() => setCount(1)}>Increase</button>
    </div>
  );
};

export default Profile;
