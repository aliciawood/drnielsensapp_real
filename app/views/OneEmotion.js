import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

export class OneEmotion extends React.Component {
    static navigationOptions = {
		header: null
    };

    yourEmotionPressed=() => {
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneEmotionWhenRT',
            {
                whose: 'Your ',
                levels:[{title: 'Your ' + emotion, route: 'OneEmotionRT'}].concat(levels),
                emotion: emotion
            }
        );
    }

    someoneElsesEmotionPressed=() => {
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneEmotionSomeoneElsesRT',
            {
                levels:[{title: 'Someone Else\'s ' + emotion, route: 'OneEmotionRT'}].concat(levels),
                emotion: emotion,
                whose: 'Someone Else\'s'
            }
        );
    }

    render(){
        const { navigate } = this.props.navigation;
        const emotion = this.props.navigation.state.params.emotion;
        const levels = this.props.navigation.state.params.levels;
        return (
            <View style={styles.container}>
				<Header 
					navigate={navigate} 
					message='Logout'
					levels={levels}
				/>
                <View style={styles.whose}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.yourEmotionPressed()}>
                        <Text style={styles.buttonText}> Your Emotion </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.someoneElsesEmotionPressed()}>
                        <Text style={styles.buttonText}> Someone Else's Emotion </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
		flex: 1
    },
    whose:{
        flex: 12
    },
    buttonStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderBottomWidth: 1
    },
    buttonText: {
        // color: '#ffffff',
        fontSize: 25
    }
});