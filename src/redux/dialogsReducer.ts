import { DialogsPageType, ActionType } from './store';

type InitialStateType = {
    messages: {
        message: string
    }[]
    dialogs: {
        name: string
        id: string
    }[]

}

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

}

const dialogsReducer = (state: DialogsPageType = initialState , action: ActionType) => {
    switch(action.type) {

        case SEND_MESSAGE: {
            let stateCopy = {...state}
            let body = action.newMessageBody

            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({message: body});
            return stateCopy;
        }
        default:
            return state;     
    }
        
} 



export const sendMessageActionCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}

export default dialogsReducer;