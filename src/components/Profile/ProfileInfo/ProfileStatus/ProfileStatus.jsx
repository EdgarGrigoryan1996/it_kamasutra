import React, { Component } from "react";
import s from "../ProfileInfo.module.css";

class ProfileStatus extends Component {
  state = {
    editMode: false,
    text: this.props.aboutMe,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps !== this.props || nextState !== this.state;
  }

  render() {
    console.log(this.props);
    return (
      <div className={s.profileStatusBlock}>
        {!this.state.editMode ? (
          <div className={s.profileStatus} title="Double Click for Edit">
            <span onDoubleClick={this.activateEditMode}>{this.state.text}</span>
          </div>
        ) : (
          <div className={s.profileStatusEdit}>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              type="text"
              value={this.state.text}
              onChange={(e) => {
                this.setState({
                  text: e.target.value,
                });
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
