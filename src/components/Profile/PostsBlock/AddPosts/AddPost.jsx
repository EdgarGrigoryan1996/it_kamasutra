import React from "react";
import s from "./AddPost.module.css";

export default function AddPost({ newPostText, myDispatch }) {
  return (
    <div className={s.addPost}>
      <textarea
        placeholder="your news..."
        className={s.AddPostArea}
        value={newPostText}
        onChange={(e) => {
          myDispatch("change", e.target.value);
        }}
      />
      <div className={s.sendButtonBlock}>
        <button
          disabled={newPostText.trim().length > 0 ? false : true}
          className={newPostText.trim().length > 0 ? "" : s.disable}
          onClick={() => {
            myDispatch("add-post");
          }}
        >
          Share
        </button>
      </div>
    </div>
  );
}
