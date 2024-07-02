import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer.js";
import MyPosts from "./MyPosts.jsx";

const MyPostsContainer = (props) => {
	debugger
	let state = props.store.getState()
	// let state = props.store.profilePage;

    let addPost = () => {
       props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
		 let action = updateNewPostTextActionCreator(text);
		 props.store.dispatch(action);
    }

    return (
       <MyPosts
          posts={state.posts}
			 newPostText={state.newPostText}
          updateNewPostText={onPostChange}
          addPost={addPost}/>
    )
}

export default MyPostsContainer;