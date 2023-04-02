import s from "./Messages.module.css";
import Message from "./Message";
import AddMessage from "./AddMessage/AddMessage";

export default function Messages({messages,messageText, myDispatch}){
    return (
        <div className={s.messages_wrapper}>
            <div className={s.messagesBlock}>
                {messages.map(message =>  <Message key={message.id} message={message.message}/>)}
            </div>
            <AddMessage  messageText={messageText} myDispatch={myDispatch}/>
        </div>

    )
}