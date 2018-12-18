import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

export class OneEmotionSomeoneElseMaleFemale extends React.Component {
    static navigationOptions = {
		header: null
    };

    femalePressed=() => {
        let whose = this.props.navigation.state.params.whose;
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneEmotionWhenRT',
            {
                whose: 'Female ' + whose,
                emotion: emotion,
                levels:[{title: 'Female ' + whose + emotion , route: 'OneEmotionSomeoneElseRT'}].concat(levels), 
            }
        );
    }

    malePressed=() => {
        let whose = this.props.navigation.state.params.whose;
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneEmotionWhenRT',
            {
                whose: 'Male ' + whose,
                emotion: emotion,
                levels:[{title: 'Male ' + whose + emotion, route: 'OneEmotionSomeoneElseRT'}].concat(levels), 
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
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.malePressed()}>
                        <Text style={styles.buttonText}> Male </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.femalePressed()}>
                        <Text style={styles.buttonText}> Female </Text>
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