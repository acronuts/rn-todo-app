import React, { useState } from 'react'
import { Text, TextInput, Button, View, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const onAddGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    }

    const onClearInput = () => {
        setEnteredGoal('')
    }
    
    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={styles.inputContainer} >
                <Text>Enter goal</Text>
                <TextInput
                    placeholder='My Goals' 
                    style={styles.textContainer} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={onAddGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='clear' color='black' onPress={onClearInput}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='close' color='red' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        marginBottom: 10,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '30%',
    }
})

export default GoalInput;