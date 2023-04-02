export const UPDATE_MESSAGE_TEXT = (newMsgText) => ({
  type: "UPDATE_MESSAGE_TEXT",
  messageText: newMsgText,
});
export const ADD_MESSAGE = () => ({ type: "ADD_MESSAGE" });

const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Edita",
    },
    {
      id: 2,
      name: "Vzgo",
    },
    {
      id: 3,
      name: "Damir",
    },
    {
      id: 4,
      name: "Anna",
    },
    {
      id: 5,
      name: "Miqo",
    },
  ],
  messages: [
    {
      id: 1,
      message: "..............",
    },
    {
      id: 2,
      message: ".....",
    },
    {
      id: 3,
      message: ".........",
    },
    {
      id: 4,
      message: "........",
    },
  ],
  newMessageText: "",
  fake: 0,
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MESSAGE_TEXT":
      return {
        ...state,
        newMessageText: action.messageText,
      };
    case "ADD_MESSAGE":
      const newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    case "FAKE":
      return {
        ...state,
        fake: state.fake++,
      };
    default:
      return state;
  }
};

export default dialogsReducer;
