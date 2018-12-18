import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class EmotionList extends React.Component {

    emotionPressed=(emotion) => {
        this.props.emotionPressed(emotion);
    }

    render(){
        const emotions = this.props.emotions;
        const color = this.props.color;
        return (
            <View style={[styles.container,{backgroundColor: color}]}>
                { emotions.map((emotion, index)=> 
                    <TouchableOpacity key={index} style={styles.buttonStyles} onPress={() => this.emotionPressed(emotion)}>
                        <Text key={index} style={styles.buttonText}> {emotion} </Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 14,
        backgroundColor: 'lightgrey',
        
    },
    buttonStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderBottomWidth: .5
    },
    buttonText: {
        fontSize: 18
    }
});