import s from "./News.module.css";
import React from "react";
import news from "./addNewsToState";
import { useDispatch, useSelector } from "react-redux";

export default function News() {
  const dispatch = useDispatch();
  const newsState = useSelector((state) => {
    return state.newsPage;
  });
  if (newsState.length === 0) {
    dispatch({
      type: "ADD_NEWS",
      payload: {
        news: news,
      },
    });
  }
  return (
    <div className={s.newsWrapper}>
      <div>
        <h2>NEWS</h2>
      </div>
      <div className={s.newsBlock}>
        {newsState.map((post) => {
          console.log(post);
          return post.posts.map((onePost) => {
            return (
              <div className={s.item}>
                <img src={post.imageUrl} alt="" title={post.name} />
                <h3>{onePost.text}</h3>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
