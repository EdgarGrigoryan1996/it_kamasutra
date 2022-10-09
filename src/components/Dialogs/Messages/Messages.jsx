import s from "./Messages.module.css";
import Message from "./Message";
import AddMessage from "./AddMessage/AddMessage";

export default function Messages({messages,addMessage,updateMessageText,messageText}){
    return (
        <div className={s.messages_wrapper}>
            <div className={s.messagesBlock}>
                {messages.map(message =>  <Message key={message.id} message={message.message}/>)}
            </div>
            <AddMessage addMessage={addMessage} updateMessageText={updateMessageText} messageText={messageText}/>
        </div>

    )
}