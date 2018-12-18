import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

export class OneEmotionWhy extends React.Component {
    static navigationOptions = {
		header: null
    };

    emotionCleared=() => {
        this.props.navigation.navigate('HomeRT');
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
                    <TouchableOpacity style={styles.buttonStyles}>
                        <Text style={styles.buttonText}> WHY?? </Text>
                        {/* <Text style={styles.buttonText}> MR BIG FAT PET </Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles}>
                        <Text style={styles.buttonText}> Retest Point </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.emotionCleared()}>
                        <Text style={styles.buttonText}> Emotion Cleared </Text>
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