import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, ActionType, MessageType, RootStateType} from "../../redux/store";
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer'


type PropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    dispatch: (action: ActionType) => void
    state: RootStateType

}


const Dialogs = (props: PropsType) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesData.map(m => <Message message={m.message}/>)
    let newMessageBody= React.createRef<HTMLTextAreaElement>(); 
    
    let onSendMessageClick =() => {
       
        props.dispatch(sendMessageActionCreator())
        }; 
    let onNewMessageChange=() => {
        let body= newMessageBody.current ? newMessageBody.current.value : "---"
            props.dispatch(updateNewMessageBodyActionCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements} </div>
                <div>
    <textarea placeholder="Enter your message"
                ref={newMessageBody}
                onChange={onNewMessageChange}
                value={props.state.dialogsPage.newMessageBody} />
  
  <button onClick={onSendMessageClick}>Add Message</button>

  <button>Cancel</button>
  </div> 
            </div>
        </div>
    )
}

export default Dialogs;