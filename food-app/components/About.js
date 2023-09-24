import { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileComponent from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}
  render() {
    console.log("2");
    return (
      <div>
        <h1>About Us page</h1>
        <p>We're the Food Train 😄 </p>
        {/* <Outlet /> */}
        <ProfileClass />
        <ProfileComponent name={"Sparsh"} />
      </div>
    );
  }
}

export default About;
