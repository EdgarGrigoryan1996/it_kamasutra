import s from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";
export default function Dialogs({state,addMessage,updateMessageText}) {
    return (
        <div>
            <div className={s.title}>dialogs</div>
            <div className={s.dialogsWrapper}>
                <DialogsItems dialogs={state.dialogs}/>
                <Messages messages={state.messages} addMessage={addMessage} updateMessageText={updateMessageText} messageText={state.newMessageText}/>
            </div>
        </div>

    )
}