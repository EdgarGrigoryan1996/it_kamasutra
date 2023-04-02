import s from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import MessagesContainer from "./Messages/MessagesContainer";

export default function Dialogs({ state, dispatch }) {
  return (
    <div>
      <div className={s.title}>dialogs</div>
      <div className={s.dialogsWrapper}>
        <DialogsItems dialogs={state.dialogs} />
        <MessagesContainer
          messages={state.messages}
          dispatch={dispatch}
          messageText={state.newMessageText}
        />
      </div>
    </div>
  );
}
