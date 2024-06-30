import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./redux/state";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

let rendererEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <App state={state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
   )
}

rendererEntireTree(store.getState());

store.subscribe(rendererEntireTree);