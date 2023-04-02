import s from "./AddMessage.module.css";
import React from "react";

const AddMessage = ({messageText,myDispatch}) => {
    const msgText = React.createRef()
    const changeMsg = () => {
        const newMsgText = msgText.current.value
        myDispatch("changeMsg",newMsgText)
    }
    return (
        <div className={s.addMessage}>
            <textarea placeholder='your news...' ref={msgText} value={messageText} onChange={changeMsg}  className={s.addMessageArea} ></textarea>
            <div className={s.sendButtonBlock}>
                <button disabled={messageText.trim().length > 0 ? false : true} className={messageText.trim().length > 0 ? "" : s.disable} onClick={() => {
                    myDispatch("add-msg")
                }}>Send</button>
            </div>
        </div>
    )
}

export default AddMessage