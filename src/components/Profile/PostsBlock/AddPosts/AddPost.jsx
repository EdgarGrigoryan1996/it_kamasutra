import React from 'react'
import s from "./AddPost.module.css"
export default function AddPost({addPost,updatePostText,newPostText}) {
	const postContent = React.createRef()
	const changeText = () => {
		const text = postContent.current.value
		updatePostText(text)
	}
	return (
		<div className={s.addPost}>
			<textarea placeholder='your news...' ref={postContent} className={s.AddPostArea} value={newPostText} onChange={changeText}/>
			<div className={s.sendButtonBlock}>
				<button onClick={() => {
					addPost(newPostText)
				}}>Share</button>
			</div>
		</div>
	)
}
