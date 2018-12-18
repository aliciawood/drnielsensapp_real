import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

export class OneEmotionSomeoneElses extends React.Component {
    static navigationOptions = {
		header: null
    };

    familyPressed=() => {
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneEmotionSomeoneElseMaleFemaleRT',
            {
                levels:[{title: 'Family Member\'s ' + emotion, route: 'OneEmotionSomeoneElseRT'}].concat(levels), 
                whose: 'Non-Family Member\'s ',
                emotion: emotion
            }
        );
    }

    nonFamilyPressed=() => {
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneEmotionSomeoneElseMaleFemaleRT',
            {
                levels:[{title: 'Non-Family Member\'s ' + emotion, route: 'OneEmotionSomeoneElseRT'}].concat(levels), 
                whose: 'Non-Family Member\'s ',
                emotion: emotion
            }
        );
    }

    render(){
        const { navigate } = this.props.navigation;
        const levels = this.props.navigation.state.params.levels;
        return (
            <View style={styles.container}>
				<Header 
					navigate={navigate} 
					message='Logout'
					levels={levels}
				/>
                <View style={styles.whose}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.familyPressed()}>
                        <Text style={styles.buttonText}> Family </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.nonFamilyPressed()}>
                        <Text style={styles.buttonText}> Non-Family </Text>
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
        fontSize: 25
    }
});