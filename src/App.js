import agavi from "./assets/agavi.png";
import React, { useState } from "react";
import "./App.css";
import AccountScreen from "./Screens/AccountScreen.js";
import SettingsScreen from "./Screens/SettingsScreen.js";
import BlockScreen from "./Screens/BlockScreen.js";
import NewTaskScreen from "./Screens/NewTaskScreen.js";
import {LoginContext, TasksLibraryContext} from "./Helpers/Context.js"
import TaskList from "./Components/TaskList.js"
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("noone");
  const [tasks, setTasks] = useState(new Map());

  return (
    <div className="App-header">
      <header className="App-header">
        <div className='App-name-logo'>
        <img src={agavi} width="10%"/><p> Agavi-sorta </p>
        </div>
        <p> {isLoggedIn ? "Hi "+userName : "Please Log In"} </p>
        {/* <img src={agavi} className="App-logo" alt="logo" /> */}
        <div className='App-navbar'>
          <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn, userName, setUserName}}>
            <div className='App-navbar-button'><AccountScreen /></div>
          </LoginContext.Provider>
            <div className='App-navbar-button'><SettingsScreen /></div>
          <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn, userName, setUserName}}>
            <div className='App-navbar-button'><BlockScreen /></div>
          </LoginContext.Provider>
        </div>
        <div>
          <LoginContext.Provider value={{userName}}>
          <TasksLibraryContext.Provider value={{tasks, setTasks}}>
            <div><TaskList /></div>
            <div>{isLoggedIn ? <NewTaskScreen /> : "Must log in to create tasks"}</div>
          </TasksLibraryContext.Provider>
          </LoginContext.Provider>
        </div>
      </header>
      <div className="App-demo-instructions" >
        <p> DEMO INSTRUCTIONS DOWN BELOW</p>
        <p>Things to try: Go to account and login with a name. </p>
        <p>Then create tasks (no confirmation message yet). </p>
        <p>Then see the user specific task list on the home screen. </p>
        <p> Then try logging out to see how the user task list goes away. </p>
        <p> Log back in as the same user to recover their tasks</p>
        <p> TODO: Implement blocks</p>
      </div>
    </div>
  );
}

export default App;