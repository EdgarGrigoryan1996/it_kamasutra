import s from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({name,link,className}) => {
    return (
        <div className={className}><NavLink to={link}> {name} </NavLink></div>
    )
}

export default function DialogsItems({dialogs}) {
    return (
        <div className={s.dialogsItems}>
            {dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} link={'/dialogs/'+dialog.id} className={s.dialogItem}/>)}
        </div>
)
}