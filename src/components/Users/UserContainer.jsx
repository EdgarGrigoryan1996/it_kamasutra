import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
import { follow, unfollow } from "../../redux/Reducers/usersReducer";

class UserContainer extends Component {
  render() {
    return <User {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  disabledButtons: state.usersPage.disabledButtons,
});

export default connect(mapStateToProps, { follow, unfollow })(UserContainer);
