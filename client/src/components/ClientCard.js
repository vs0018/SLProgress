import React, { Component } from "react";
import API from "../utils/API";

class ClientCard extends Component {
  state = {
    client: {}
  };
  // When this component mounts, grab the session's clients with the _id of this.props.match.params.id
  componentDidMount() {
    this.loadClient();
  }

  loadClient() {
    this.setState({client: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}


export default ClientCard;