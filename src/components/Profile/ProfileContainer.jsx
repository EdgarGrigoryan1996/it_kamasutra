import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {
  getProfileStatus,
  SET_CURRENT_PROFILE,
  SET_PROFILE_ID,
} from "../../redux/Reducers/profileReducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setAuthUser } from "../../redux/Reducers/authReducer";
import Preloader from "../global components/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getAboutMe } from "../../selectors/profileSelectors/profileSelectors";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUser();

    if (
      this.props.match.params.userId !== "1" &&
      this.props.match.params.userId
    ) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`
        )
        .then((response) => {
          console.log(response.data);
          this.props.dispatch(SET_CURRENT_PROFILE(response.data));
        });
      setTimeout(() => {
        this.props.getProfileStatus(
          this.props.match.params.userId === 1
            ? this.props.authUser.id
            : this.props.match.params.userId
        );
      }, 100);
    } else {
      setTimeout(() => {
        this.props.getProfileStatus(this.props.authUser.id);
      }, 500);
    }
  }

  render() {
    if (this.props.aboutMe === undefined) {
      return <Preloader />;
    } else {
      return <Profile {...this.props} />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    authUser: state.auth,
    aboutMe: getAboutMe(state),
  };
};

const RedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDatContainerComponent = withRouter(RedirectComponent);

export default connect(mapStateToProps, {
  getProfileStatus,
  setAuthUser,
  SET_PROFILE_ID,
})(WithUrlDatContainerComponent);
