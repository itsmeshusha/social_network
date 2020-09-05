import React from 'react';
import { Store, CombinedState } from 'redux';
import Dialogs from './Dialogs'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ProfilePageType, DialogsPageType, ActionType} from "../../redux/store";
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer'

type PropsType = {
    store: Store<CombinedState<{
        profilePage: ProfilePageType
        dialogsPage: DialogsPageType
    }>, ActionType>
}


const DialogsContainer = (props: PropsType) => {
    const state=props.store.getState();
    
    let onSendMessageClick =() => {
       
        props.store.dispatch(sendMessageActionCreator())
        }; 
    let onNewMessageChange=(body: string) => {
       
            props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }
    return (
        <Dialogs onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={onNewMessageChange}
                 dialogsData={state.dialogsPage.dialogs}
                 messagesData={state.dialogsPage.messages}
                 newMessageBody={state.dialogsPage.newMessageBody} />
    )
}

export default DialogsContainer;