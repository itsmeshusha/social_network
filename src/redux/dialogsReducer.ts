import { DialogsPageType, ActionType } from './state';

const UPDATE_NEW_MESSAGE_BODY= 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE= 'SEND-MESSAGE'

const dialogsReducer = (state: DialogsPageType , action: ActionType) => {
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