

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state from "./redux/state"
import {addPost,addMessage,updatePostText,updateMessageText,subscribe} from "./redux/state"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const reRender = () => {

    root.render(
        <React.StrictMode>
            <App state = {state} addPost={addPost} addMessage={addMessage} updatePostText={updatePostText} updateMessageText={updateMessageText}/>
        </React.StrictMode>
    );
    reportWebVitals();
}

reRender()

subscribe(reRender)




