import s from "./Messages.module.css";

export default function Message(props){
    return (
        <div className={s.message}>
            <div className={s.userInfo}>
                <div className={s.userAvatar}></div>
                <div className={s.userName}>Edita</div>
            </div>
            <div className={s.messageText}>
                <div className={s.messageBox}>{props.message}</div>
            </div>
        </div>
    )
}