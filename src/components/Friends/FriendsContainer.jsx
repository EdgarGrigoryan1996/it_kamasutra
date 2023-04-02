import { Component } from "react";
import Friends from "./Friends";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class FriendsContainer extends Component {
  render() {
    return <Friends {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default withAuthRedirect(connect(mapStateToProps, {})(FriendsContainer));
