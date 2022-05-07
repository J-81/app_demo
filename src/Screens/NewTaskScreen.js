import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

import Form from '../Components/Form.js';

function NewTaskScreen() {
    const [isVisible, setIsVisible] = useState(false);

    function handlePressCancel() {
        setIsVisible(false)
      }

    return (
        <>
            <Button onPress={() => setIsVisible(true)} title='+ Create New Task' />
            <Modal 
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
                visible={isVisible}
            >
                <View>
                    <Form />
                </View>
                <Button onPress={handlePressCancel} title={'Cancel Create New Task'} />
            </Modal>
        </>
     );
}

export default NewTaskScreen;