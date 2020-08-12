import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


type DialogType = {
    id: string
    name: string
}

type MessageType = {
    message: string
}

let dialogsData: Array<DialogType> = [
    {name: "Igor", id: "1"},
    {name: "Ann", id: "2"},
    {name: "Grigory", id: "3"}
];

let messagesData: Array<MessageType> = [
    {message: "What are you doing now? I have good news!"},
    {message: "How are you?"},
    {message: "Hi!"}
]

let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
let messagesElements = messagesData.map(m => <Message message={m.message}/>)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;