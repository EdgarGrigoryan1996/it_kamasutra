import React from 'react'
import s from "./AddPost.module.css"
export default function AddPost() {
	return (
		<div className={s.addPost}>
			<textarea placeholder='your news...' className={s.AddPostArea} ></textarea>
			<div className={s.sendButtonBlock}>
				<button>Send</button>
			</div>
		</div>
	)
}
