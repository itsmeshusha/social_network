import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import { DialogType, MessageType, PostDataType} from "./index";
import { RootStateType, ActionType} from "./redux/state";

type PropsType = {
    state: RootStateType
    newPostText: string
    dispatch: (action: ActionType) => void
}


const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ ()=> <Profile postData={props.state.profilePage.posts } 
                                                                    dispatch={props.dispatch}
                                                                    newPostText={props.state.profilePage.newPostText} /> } />
                    <Route path='/dialogs' render={ ()=> <Dialogs
                        dialogsData={props.state.dialogsPage.dialogs}
                        messagesData={props.state.dialogsPage.messages}
                        state={props.state}
                        dispatch={props.dispatch} /> }  />
                    <Route path='/news' render={ ()=> <News /> }  />
                    <Route path='/music' render={ ()=> <Music /> }  />
                    <Route path='/settings' render={ ()=> <Settings /> }  />

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
