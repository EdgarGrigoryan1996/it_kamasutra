import s from "./DialogsItems.module.css";

export default function DialogsItems(){
    return (
        <div className={s.dialogsItems}>
            <div className={s.dialogItem}>Edita</div>
            <div className={s.dialogItem}>Vzgo</div>
        </div>
    )
}