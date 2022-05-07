import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

function BlockScreen() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button onPress={() => setIsVisible(true)} title='Block Library' />
            <Modal 
                animationType="fade"
                onRequestClose={() => setIsVisible(false)}
                visible={isVisible}
            >
                <View>
                    <Text>Settings Details Here</Text>
                </View>
                <Button onPress={() => setIsVisible(false)} title={'Close Block Library Tab'} />
            </Modal>
        </>
     );
}

export default BlockScreen;