import React, {useState} from 'react';
import {ScrollView, View, Text, ToastAndroid, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Define own Question component with appropriate parameters and display
const QuizQuestion = ({question}) => {
    return (
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Text>{question}</Text>
        </View>
    );
};

const QuizApp = () => {
    // Declare necessary State variables

    const [q1, ans1] = useState('12');
    const [q2, ans2] = useState('');
    const [q3, ans3] = useState('');

    return (
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
            <Text>Quiz Title</Text>

            {/* Add custom rendering Quiz Question component with appropriate properties set. */}
            {/* Add at least 3 questions. */}
            <QuizQuestion
                question='Using Caeser Cipher, if the code, "Onebgenhzn", is meant to be the word "Barotrauma", what key is used?'
            />
            <Picker onValueChange={(value) => ans1(value)}>
                <Picker.Item label='12' value='12' />
                <Picker.Item label='13' value='13' />
                <Picker.Item label='14' value='14' />
            </Picker>

            <QuizQuestion
                question=''
            />

            <QuizQuestion
                question=''
            />

            <TouchableOpacity
                style={{
                    margin: 5, backgroundColor: 'deepskyblue', height: 50, borderRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}
                onPress={() => {
                    // Add codes below to tabulate scores, display result and appropriate messages
                    const correctAns1 = '13'
                    const correctAns2 = ''
                    const correctAns3 = ''
                    let mymessage= 'Error: Wrong password';
                    if (q1 === correctAns1 && q2 === correctAns2 && q3 === correctAns3) {
                        mymessage = 'Yes.'
                    }
                    // Alert.alert('hello everybody my name is\n          Mark Edward Fishbach')
                    ToastAndroid.show(mymessage, ToastAndroid.SHORT)
                }}
            >
                <Text style={{fontSize: 20}}>SUBMIT</Text>
            </TouchableOpacity>


        </ScrollView>
    );
};

export default QuizApp;