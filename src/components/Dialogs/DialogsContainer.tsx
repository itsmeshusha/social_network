import React from 'react';
//import { Store, CombinedState } from 'redux';
import Dialogs from './Dialogs'
//import DialogItem from "./DialogItem/DialogItem";
//import Message from "./Message/Message";
//import { ProfilePageType, DialogsPageType, ActionType } from "../../redux/store";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer'
import { connect } from 'react-redux';
import { ActionType } from '../../redux/store';
import { StateType } from '../../redux/redux-store';
import { DialogType,  MessageType } from "../../redux/store";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type PropsType = {
    //isAuth: boolean
    onSendMessageClick: () => void 
    onNewMessageChange: (body: string) => void
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageBody: string
}



let mapStateToProps = (state: StateType) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        //isAuth: state.auth.isAuth
            
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyActionCreator(body))
        }
        
    }
}


 export default compose <any> (
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
 )(Dialogs)