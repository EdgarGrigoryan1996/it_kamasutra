import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NotFound from "./components/NotFound/NotFound";
import Friends from "./components/Friends/Friends";


function App({state,addPost,addMessage,updatePostText,updateMessageText}) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className='nav_content'>
                    <Navbar friends={state.friendsPage.friends}/>
                    <div className="content-wrapper">
                        <Routes>
                            <Route path="/dialogs/*" element={<Dialogs state={state.dialogsPage} addMessage={addMessage} updateMessageText={updateMessageText}/>}/>
                            <Route path="/home" element={<Profile state={state.profilePage} addPost={addPost} updatePostText={updatePostText}/>}/>
                            <Route path="/" element={<Profile state={state.profilePage} addPost={addPost} updatePostText={updatePostText}/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/friends" element={<Friends friends={state.friendsPage.friends}/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>


    );
}

export default App;
