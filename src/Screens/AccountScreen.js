import React, { useState, useContext } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import {LoginContext} from '../Helpers/Context.js'

function AccountScreen() {
    const { isLoggedIn, 
            setIsLoggedIn, 
            userName, 
            setUserName } = useContext(LoginContext);
    const [inputUserName, setInputUserName] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (e) => {
        // Log in and set UserName
        e.preventDefault();
        setUserName(inputUserName);
        setIsLoggedIn(true);
    }

    // Super silly as this actually changes the userName as you type
    // Maybe this should be 
    function handleChangeUserName(e) {
        // setUserName(e.target.value);
        // Question: The below feels like a better approach but is there a better way
        setInputUserName(e.target.value);
      }

    const logOut = () => {
        setIsLoggedIn(false);
        setUserName("noone");
    }

    return (
        <div className="App-screen">
        <Button onPress={() => setIsVisible(true)} title='Account' />
            <Modal 
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
                visible={isVisible}
                
            >
                <View>
                    <Text>Account logged in as: {isLoggedIn ? userName : "Not Logged In!"}</Text>
                </View>
                {!isLoggedIn && 
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={inputUserName} onChange={handleChangeUserName}/>
                        </label>
                        {<button type="submit"> Log In </button>}
                    </form>
                }       
                {isLoggedIn && <div className='App-navbar-button'><button onClick={logOut}> Log Out </button></div>}
                <div className='App-navbar-button'><Button onPress={() => setIsVisible(false)} title={'Close Account Tab'} /></div>
            </Modal>
        </div>
     );
}

export default AccountScreen;