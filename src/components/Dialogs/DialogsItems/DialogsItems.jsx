import s from "./DialogsItems.module.css";
import {NavLink} from "react-router-dom";
import {dialogsData} from "../DialogsData/dialogsData";

const DialogItem = ({name,link,className}) => {
    return (
        <div className={className}><NavLink to={link}> {name} </NavLink></div>
    )
}

export default function DialogsItems() {
    return (
        <div className={s.dialogsItems}>
            {dialogsData.map((dialog) => {
                return (
                    <DialogItem name={dialog.name} link={'/dialogs/'+dialog.id} className={s.dialogItem}/>
                )
            })}
        </div>
)
}