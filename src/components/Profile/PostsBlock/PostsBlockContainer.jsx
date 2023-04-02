import React from "react";
import PostsBlock from "./PostsBlock";
import {
  ADD_POST,
  UPDATE_POST_TEXT,
} from "../../../redux/Reducers/profileReducer";

const PostsBlockContainer = React.memo((props) => {
  let { posts, dispatch, newPostText } = props;
  const myDispatch = (type, newText) => {
    switch (type) {
      case "change":
        dispatch(UPDATE_POST_TEXT(newText));
        break;
      case "add-post":
        dispatch(ADD_POST());
        break;
      default:
        return false;
    }
  };
  console.log("Render");
  return (
    <PostsBlock
      posts={posts}
      dispatch={dispatch}
      newPostText={newPostText}
      myDispatch={myDispatch}
    />
  );
});

export default PostsBlockContainer;
