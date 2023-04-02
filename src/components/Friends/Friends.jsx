import React from 'react'
import s from "./Friends.module.css"
export default function Friends({friends,size}){
    return (
        <div className={s.friends}>
            {friends.map((friend) => {
                return (
                    <div key={friend.id} className={s.friendBlock}>
                        <div className={size === "small" ? s.friendSmallAvatar : s.friendAvatar}></div>
                        <div className={size === "small" ? s.friendSmallName : s.friendName}>{friend.name}</div>
                    </div>
                )
            })}
        </div>
    )
}