import s from "./Messages.module.css";
import Message from "./Message";

export default function Messages(){
    return (
        <div className={s.messagesBlock}>
            <Message message="Barev, vonc es?"/>
            <Message message="ba erb kgas?"/>
            <Message message="iiiiiiiiiiiiii alooooooo"/>

        </div>
    )
}