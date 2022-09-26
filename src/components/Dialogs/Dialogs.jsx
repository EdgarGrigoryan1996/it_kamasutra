import s from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";
export default function Dialogs() {
    return (
        <div>
            <div className={s.title}>dialogs</div>
            <div className={s.dialogsWrapper}>
                <DialogsItems />
                <Messages />
            </div>
        </div>

    )
}