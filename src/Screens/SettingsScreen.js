import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

function Settings() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button onPress={() => setIsVisible(true)} title='Settings' />
            <Modal 
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
                visible={isVisible}
            >
                <View>
                    <Text>Settings Details Here</Text>
                </View>
                <Button onPress={() => setIsVisible(false)} title={'Close Settings Tab'} />
            </Modal>
        </>
     );
}

export default Settings;