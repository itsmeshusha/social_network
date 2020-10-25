import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {PostDataType, ActionType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {

    addPost: (newPostText: string) => void
    postData: PostDataType[]
    newPostText: string
    
}

type AddNewPostType ={
    newPostText: string
}

const MyPosts = (props: PropsType) => {
    debugger;
    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


const addPost = (values: any) => {
    debugger
        props.addPost(values.newPostText)

}

    return (
        
        <div className={s.content}>
            <div><h3>My posts</h3></div>
            <div>
                <AddNewPostFormRedux onSubmit={addPost} />
                <div>{postsElements}</div>
            </div>
        </div>
    );
}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostType>> = (props) => {
    debugger;
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"}
                   placeholder="Enter your text"
                    name={"newPostText"} />
        </div>
                    <button>Add</button>

    </form>
}

const AddNewPostFormRedux = reduxForm<AddNewPostType> ({form: "profileAddNewPostForm"}) (AddNewPostForm)

export default MyPosts;
