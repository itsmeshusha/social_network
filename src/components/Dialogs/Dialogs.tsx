import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogType,  MessageType } from "../../redux/store";
import { Redirect } from 'react-router-dom';



type PropsType = {
    onSendMessageClick: () => void 
    onNewMessageChange: (body: string) => void
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageBody: string
    isAuth: boolean

}


const Dialogs = (props: PropsType) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messagesData.map(m => <Message message={m.message} />)
    let newMessageBody = React.createRef<HTMLTextAreaElement>();

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    };

    let onNewMessageChange = () => {
        let body = newMessageBody.current ? newMessageBody.current.value : "---"
        props.onNewMessageChange(body)
    }

    if(!props.isAuth) {
        return <Redirect to={'/login'} />
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
                        value={props.newMessageBody} />

                    <button onClick={onSendMessageClick}>Add Message</button>

                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;