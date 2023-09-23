import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("child constructor");
    super(props);
    this.state = {
      userInfo: "Sheldon",
      location: "Los Angeles",
    };
  }

  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("https://api.github.com/users/sparsh09");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    console.log("component render");
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Components</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>{this.state.userInfo.name}</h2>
        <h2>{this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default ProfileClass;
