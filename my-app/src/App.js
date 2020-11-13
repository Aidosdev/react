import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar navLinks={props.state.nav.navLinks} friends={props.state.nav.friends} />
        <Content posts={props.state.profilePosts.post}
          messages={props.state.dialog.messagePage}
          dialogs={props.state.dialog.dialogPage}
          dispatch={props.dispatch}
          newPostText={props.state.profilePosts.newPostText}
          newMessageText={props.state.dialog.newMessageText} />
      </div>
    </BrowserRouter>
  )
}

export default App;
