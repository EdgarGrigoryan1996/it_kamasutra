import Messages from "./Messages";
import {ADD_MESSAGE, UPDATE_MESSAGE_TEXT} from "../../../redux/Reducers/dialogsReducer";
import StoreContext from "../../../StoreContext";
import {useSelector} from "react-redux";

export default function MessagesContainer({dispatch}){
    const dialogsPage = useSelector((state) => {
        return state.dialogsPage
    })
    const myDispatch = (type,newText) => {
        switch (type) {
            case "changeMsg":
                dispatch(UPDATE_MESSAGE_TEXT(newText))
                break;
            case "add-msg":
                dispatch(ADD_MESSAGE())
                break;
            default :
                return false;

        }
    }

    return (
                <Messages messages={dialogsPage.messages}  messageText={dialogsPage.newMessageText} myDispatch={myDispatch}/>

        )


}