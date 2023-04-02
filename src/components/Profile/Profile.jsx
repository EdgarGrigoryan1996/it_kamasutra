import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import { useSelector } from "react-redux";

export default function Profile({ state, dispatch, aboutMe }) {
  const currentProfile = useSelector((state) => {
    return state.profilePage.currentProfile
      ? state.profilePage.currentProfile
      : state.profilePage.myProfile;
  });
  return (
    <main>
      <div className={s.bg_image}>
        <img
          src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <ProfileInfo profile={currentProfile} aboutMe={aboutMe} />
      <PostsBlockContainer
        posts={state.posts}
        dispatch={dispatch}
        newPostText={state.newPostText}
      />
    </main>
  );
}
