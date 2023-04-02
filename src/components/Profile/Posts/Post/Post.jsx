import React from 'react'
import s from "./Post.module.css"
export default function Post({ text }) {
	return (
		<div className={s.item}>
			<img src="https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" alt="" />
			<h3>{text}</h3>
		</div>
	)
}
