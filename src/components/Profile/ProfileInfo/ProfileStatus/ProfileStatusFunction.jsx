import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editAboutMe } from "../../../../redux/Reducers/profileReducer";
import { profileAPI } from "../../../../api/api";
import s from "../ProfileInfo.module.css";

function ProfileStatusFunction(props) {
  const [text, setText] = useState(props.aboutMe);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    profileAPI.setProfileStatus(text).then((response) => {
      if (response.resultCode === 0) {
        dispatch(editAboutMe(text));
      }
    });

    setEditMode(false);
  };
  return (
    <div className={s.profileStatusBlock}>
      {!editMode && (
        <div className={s.profileStatus}>
          <div
            className={props.aboutMe ? s.p5 : ""}
            onDoubleClick={activateEditMode}
            title={"Double Click for Edit"}
          >
            {props.aboutMe}
          </div>
        </div>
      )}
      {!props.aboutMe && !editMode && (
        <button className={s.btnAddStatus} onClick={activateEditMode}>
          Add Status
        </button>
      )}
      {editMode && (
        <div className={s.profileStatusEdit}>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ProfileStatusFunction;
