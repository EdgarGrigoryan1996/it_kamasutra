import React from "react";
import s from "./ProfileInfo.module.css";
import noImg from "../../../assets/images/noImg.png";
import ProfileStatusFunction from "./ProfileStatus/ProfileStatusFunction";

export default function ProfileInfo({ profile, aboutMe }) {
  return (
    <div className={s.profile_img_description}>
      <div className={profile.lookingForAJob ? s.openToWork : s.closeToWork}>
        <img
          src={profile.photos.large ? profile.photos.large : noImg}
          className={s.profileImage}
          alt={profile.fullName}
        />
      </div>

      <div className={s.description}>
        <div className={s.profileName}>{profile.fullName}</div>
        {profile.lookingForAJobDescription && profile.lookingForAJob && (
          <div className={s.openToWorkDescription}>
            i am find work in : {profile.lookingForAJobDescription}
          </div>
        )}
        <div className={s.userInfo}>
          <div>Date of birth : 28 January</div>
          <div>City : Yerevan</div>
          <ProfileStatusFunction aboutMe={aboutMe} />
        </div>
      </div>
    </div>
  );
}
