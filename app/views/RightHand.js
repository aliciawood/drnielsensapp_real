import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';


export class RightHand extends React.Component {
    static navigationOptions = {
		header: null
    };

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
                <View style={{flex:3}}/>
                <View style={{flex:3}}/>
                <View style={{flex:3}}/>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
		flex: 1
    },
});