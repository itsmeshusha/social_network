import React from 'react';
import s from './../Dialogs.module.css';

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props: MessagePropsType) => {
    let newMessage= React.createRef<HTMLTextAreaElement>();
    
    let addMessage =() => {
        let text=newMessage.current ? newMessage.current.value : "----"
        alert(text);
        }; 
    return (
        <div className={s.message}>{props.message}
        <div>
    <textarea ref={newMessage} />
  
  <button onClick={addMessage}>Add Message</button>

  <button>Cancel</button>
  </div>  
  </div>
    )
}

export default Message;