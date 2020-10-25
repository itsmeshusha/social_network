import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogType,  MessageType } from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";




type PropsType = {
    onSendMessageClick: (newMessageBody: string) => void
    onNewMessageChange: (body: string) => void
    dialogsData: DialogType[]
    messagesData: MessageType[]
    isAuth: boolean

}

type FormDataType = {
    newMessageBody: string
}


const Dialogs = (props: PropsType) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messagesData.map(m => <Message message={m.message} />)



    const addNewMessage = (values: any) => {
        props.onSendMessageClick(values.newMessageBody)

    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements} </div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your text"
                       name="newMessageBody"
                       component={Textarea}
                        validate={[required, maxLength50]}/>
            </div>

            <button>Add Message</button>

        </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'}) (AddMessageForm)

export default Dialogs;