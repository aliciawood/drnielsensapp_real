import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

export class OneEmotionWhen extends React.Component {
    static navigationOptions = {
		header: null
    };

    presentPressed=() => {
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        let whose = this.props.navigation.state.params.whose;
        this.props.navigation.navigate('OneEmotionWhyRT',
            {
                levels:[{title: whose + ' Present ' + emotion, route: 'OneEmotionsWhenRT'}].concat(levels), 
            }
        );
    }

    pastPressed=() => {
        let emotion = this.props.navigation.state.params.emotion;
        let levels = this.props.navigation.state.params.levels;
        let whose = this.props.navigation.state.params.whose;
        const allRanges = require('../sections/config/initialRangeToOtherRanges.json');
        const ranges = allRanges["starting"];
        this.props.navigation.navigate('OneEmotionYoursPastRT',
            {
                title: whose + ' Past ' + emotion,
                levels:[{title: whose + ' Past ' + emotion, route: 'OneEmotionsWhenRT'}].concat(levels), 
                ranges:ranges,
                whose: whose
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
                        <Text style={styles.buttonText}> Present </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.pastPressed()}>
                        <Text style={styles.buttonText}> Past </Text>
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