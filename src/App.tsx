import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
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
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={ ()=> <ProfileContainer  /> } />
                    <Route path='/dialogs' render={ ()=> <DialogsContainer  /> }  />
                    <Route path='/news' render={ ()=> <News /> }  />
                    <Route path='/music' render={ ()=> <Music /> }  />
                    <Route path='/settings' render={ ()=> <Settings /> }  />
                    <Route path='/users' render={ () => <UsersContainer /> } />
                    <Route path='/login' render={() => <Login />} />

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
