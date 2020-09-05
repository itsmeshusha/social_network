import { DialogsPageType, ActionType } from './store';

type InitialStateType = {
    messages: {
        message: string
    }[]
    dialogs: {
        name: string
        id: string
    }[]
    newMessageBody: string
}

const UPDATE_NEW_MESSAGE_BODY= 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE= 'SEND-MESSAGE'

const initialState: InitialStateType = {
    messages: [
        {message: "What are you doing now? I have good news!"},
        {message: "How are you?"},
        {message: "Hi!"}],
    dialogs: [
        {name: "Igor", id: "1"},
        {name: "Ann", id: "2"},
        {name: "Grigory", id: "3"}],
    newMessageBody: ""    
}

const dialogsReducer = (state: DialogsPageType = initialState , action: ActionType) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({message: body});
            return state;
        default:
            return state;     
    }
        
} 

export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export default dialogsReducer;