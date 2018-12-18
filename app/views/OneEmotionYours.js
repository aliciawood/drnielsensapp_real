import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

export class OneEmotionYours extends React.Component {
    static navigationOptions = {
		header: null
    };

    presentPressed=() => {
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneEmotionWhyRT',
            {
                levels:[{title: 'Your Present ' + emotion, route: 'OneEmotionsYours'}].concat(levels), 
            }
        );
    }

    pastPressed=() => {
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        const allRanges = require('../sections/config/initialRangeToOtherRanges.json');
        const ranges = allRanges["starting"];
        console.log("RANGES: ",ranges);
        this.props.navigation.navigate('OneEmotionYoursPastRT',
            {
                title: 'Your Past ' + emotion,
                levels:[{title: 'Your Past ' + emotion, route: 'OneEmotionsYours'}].concat(levels), 
                ranges:ranges
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
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.presentPressed()}>
                        <Text styles={styles.buttonText}> Present </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.pastPressed()}>
                        <Text styles={styles.buttonText}> Past </Text>
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
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 25
    }
});