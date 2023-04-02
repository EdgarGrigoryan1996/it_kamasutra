import { Component } from "react";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { connect } from "react-redux";

class DialogsContainer extends Component {
  render() {
    return <Dialogs {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {};
};
let RedirectComponent = withAuthRedirect(DialogsContainer);

export default connect(mapStateToProps, {})(RedirectComponent);
