import profileReducer from "./Reducers/profileReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import friendsReducer from "./Reducers/friendsReducer";



const store = {
    _state: {
        profilePage:{
            posts:[
                {
                    id:1,
                    text:"Hello my name is Edgar",
                    likes:5
                },
                {
                    id:2,
                    text:"i am web developer",
                    likes:7
                },
                {
                    id:3,
                    text:"i love play football",
                    likes:58
                },
                {
                    id:4,
                    text:"and i love cars",
                    likes:77
                },
            ],
            newPostText:"",
        },
        dialogsPage:{
            dialogs:[
                {
                    id:1,
                    name:"Edita"
                },
                {
                    id:2,
                    name:"Vzgo"
                },
                {
                    id:3,
                    name:"Damir"
                },
                {
                    id:4,
                    name:"Anna"
                },
                {
                    id:5,
                    name:"Miqo"
                },
            ],
            messages:[
                {
                    id:1,
                    message:"Barev, vonc es?",
                },
                {
                    id:2,
                    message:"ba erb kgas?",
                },
                {
                    id:3,
                    message:"iiiiiiiiiiiiii alooooooo",
                },
                {
                    id:4,
                    message:"fsyo chem xosum hetd el((((",
                },
            ],
            newMessageText:""
        },
        friendsPage:{
            friends:[
                {
                    id:1,
                    name:"Edita",
                    gender:"female",
                    age:19
                },
                {
                    id:2,
                    name:"Anna",
                    gender:"female",
                    age:23
                },
                {
                    id:3,
                    name:"Vzgo",
                    gender:"male",
                    age:26
                },
                {
                    id:4,
                    name:"Damir",
                    gender:"male",
                    age:26
                },
                {
                    id:5,
                    name:"Miqo",
                    gender:"male",
                    age:25
                },
                {
                    id:6,
                    name:"Qis",
                    gender:"female",
                    age:25
                }
            ]
        }
    },
    _reRender(){
        console.log("changed")
    },
    getState(){
        return this._state
    },
    subscribe(callback) {
        this._reRender = callback
    },
    observer(){
        return this._reRender()
    },
    _updatePostText(newText) {
      this._state.profilePage.newPostText = newText
        this._reRender()
    },
    _addPost() {
        const newPost = {
            id:this._state.profilePage.posts.length + 1,
            text:this._state.profilePage.newPostText,
            likes:0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._reRender()
    },
    _updateMessageText(messageText){
        this._state.dialogsPage.newMessageText = messageText
        this._reRender()
    },
    _addMessage(){
        const newMessage = {
            id:this._state.dialogsPage.messages.length + 1,
            message:this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText=""
        this._reRender()
    },
    dispatch(action){
        profileReducer(this._state.profilePage,action)
        dialogsReducer(this._state.dialogsPage,action)
        friendsReducer(this._state.friendsPage,action)

        this._reRender()
    },
}
export default store
window.store = store