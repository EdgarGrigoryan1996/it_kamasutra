import s from "./AddMessage.module.css";
import React from "react";


const AddMessage = ({addMessage,updateMessageText,messageText}) => {
    const msgText = React.createRef()
    const changeMsg = (e) => {
        const newMsgText = msgText.current.value
        updateMessageText(newMsgText)
    }
    return (
        <div className={s.addMessage}>
            <textarea placeholder='your news...' ref={msgText} value={messageText} onChange={changeMsg}  className={s.addMessageArea} ></textarea>
            <div className={s.sendButtonBlock}>
                <button onClick={() => {
                    addMessage(messageText)
                }}>Send</button>
            </div>
        </div>
    )
}

export default AddMessage