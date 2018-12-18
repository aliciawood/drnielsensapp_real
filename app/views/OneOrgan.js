import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';
import { EmotionList } from '../sections/EmotionList.js'

export class OneOrgan extends React.Component {
    static navigationOptions = {
		header: null
    };

    emotionPressed=(emotion) => {
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneEmotionRT',
            {
                levels:[{title: emotion, route: 'OneOrganRT'}].concat(levels), 
                emotion:emotion
            }
        );
    }

    render(){
        const { navigate } = this.props.navigation;
        const organ = this.props.navigation.state.params.organ;
        const levels = this.props.navigation.state.params.levels;
        var organsToEmotions = require('../sections/config/organsToEmotions.json');
        var organsToColors = require('../sections/config/organsToColors.json');
        return (
            <View style={styles.container}>
				<Header 
					navigate={navigate} 
					message='Logout'
					levels={levels}
				/>
                <EmotionList 
                    emotions={organsToEmotions[organ]} 
                    color={organsToColors[organ]} 
                    emotionPressed={this.emotionPressed}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
		flex: 1
    },
});