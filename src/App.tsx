import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
//import { Store, CombinedState } from 'redux';
//import { ProfilePageType, DialogsPageType, ActionType} from "./redux/store";

// type PropsType = {
//     store: Store<CombinedState<{
//         profilePage: ProfilePageType;
//         dialogsPage: DialogsPageType;
//     }>, ActionType>
// }


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ ()=> <ProfileContainer  /> } />
                    <Route path='/dialogs' render={ ()=> <DialogsContainer  /> }  />
                    <Route path='/news' render={ ()=> <News /> }  />
                    <Route path='/music' render={ ()=> <Music /> }  />
                    <Route path='/settings' render={ ()=> <Settings /> }  />
                    <Route path='/users' render={ () => <UsersContainer /> } />

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
