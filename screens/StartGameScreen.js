import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen ({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler (enteredText) {
        setEnteredNumber(enteredText);
    };

    function resetInputHandle() {
        setEnteredNumber('');
    }
    function confirmInputHandler () {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid number!",
                "Number has to be a number between 1 and 99.",
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandle}]
            )
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer} >
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText style={styles.instructionText} >Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <PrimaryButton
                        onPress={resetInputHandle}
                    >Reset</PrimaryButton>
                    <PrimaryButton
                        onPress={confirmInputHandler}
                    >Confirm</PrimaryButton>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    }
})
