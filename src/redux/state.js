let reRender = () => {
    console.log("changed")
}
const state = {
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
}
export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText
    reRender()
}

export const addPost = () => {
    const newPost = {
        id:state.profilePage.posts.length + 1,
        text:state.profilePage.newPostText,
        likes:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    reRender()

}

export const updateMessageText = (messageText) => {
    state.dialogsPage.newMessageText = messageText
    reRender()
}
export const addMessage = () => {
    const newMessage = {
        id:state.dialogsPage.messages.length + 1,
        message:state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText=""
    reRender()
}

export const subscribe = (callback) => {
    reRender = callback
}
export default state