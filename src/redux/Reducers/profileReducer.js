import { profileAPI } from "../../api/api";

const initialState = {
  posts: [
    {
      id: 1,
      text: "Hello my name is Edgar",
      likes: 5,
    },
    {
      id: 2,
      text: "i am web developer",
      likes: 7,
    },
    {
      id: 3,
      text: "i love play football",
      likes: 58,
    },
    {
      id: 4,
      text: "and i love cars",
      likes: 77,
    },
  ],
  newPostText: "",
  profileId: 1,
  myProfile: {
    aboutMe: undefined,
    contacts: {
      facebook: "facebook.com",
      website: null,
      vk: "vk.com/dimych",
      twitter: "https://twitter.com/@sdf",
      instagram: "instagra.com/sds",
      youtube: null,
      github: "github.com",
      mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: "React, Java Script",
    fullName: "Edgar Grigoryan",
    userId: 1,
    photos: {
      small:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      large:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  },
  currentProfile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_POST_TEXT":
      console.log(state);
      return {
        ...state,
        newPostText: action.newText,
      };
    case "ADD_POST":
      const newPost = {
        id: state.posts.length + 1,
        text: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case "SET_CURRENT_PROFILE":
      return {
        ...state,
        currentProfile: action.profile,
      };
    case "SET_PROFILE_ID":
      return {
        ...state,
        profileId: action.profileId,
      };
    case "EDIT_ABOUT_ME":
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          aboutMe: action.text,
        },
      };
    default:
      return state;
  }
};

export const UPDATE_POST_TEXT = (text) => ({
  type: "UPDATE_POST_TEXT",
  newText: text,
});
export const ADD_POST = () => ({ type: "ADD_POST" });

export const SET_CURRENT_PROFILE = (profile) => {
  return {
    type: "SET_CURRENT_PROFILE",
    profile,
  };
};
export const SET_PROFILE_ID = (profileId) => {
  return {
    type: "SET_PROFILE_ID",
    profileId,
  };
};

export const editAboutMe = (text) => {
  return {
    type: "EDIT_ABOUT_ME",
    text,
  };
};

// Thunks

export const getProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId).then((response) => {
      dispatch(editAboutMe(response));
    });
  };
};

export default profileReducer;
