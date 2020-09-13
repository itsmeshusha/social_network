import React from 'react';
//import { Store, CombinedState } from 'redux';
import Dialogs from './Dialogs'
//import DialogItem from "./DialogItem/DialogItem";
//import Message from "./Message/Message";
//import { ProfilePageType, DialogsPageType, ActionType } from "../../redux/store";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer'

import { connect } from 'react-redux';
import { ActionType, RootStateType } from '../../redux/store';

// type PropsType = {
//     store: Store<CombinedState<{
//         profilePage: ProfilePageType
//         dialogsPage: DialogsPageType
//     }>, ActionType>
// }


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody      
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;