import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';


export class BothHands extends React.Component {
    static navigationOptions = {
		header: null
    };
    leftHandPressed=() => {
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('LeftHandRT',{levels: levels.concat([{title: 'Left Hand', route: 'BothHandsRT'}])});
    }
    rightHandPressed=() => {
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('RightHandRT',{levels: levels.concat([{title: 'Right Hand', route: 'BothHandsRT'}])});
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
                <View style={{flex:3}}/>
                <View style={styles.imagesStyle}>
                    <TouchableOpacity style={styles.buttons} onPress={this.rightHandPressed}>
                        <Image
                            style={styles.image}
                            source={ require('../sections/img/rightHand.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={this.leftHandPressed}>
                        <Image
                            style={styles.image}
                            source={ require('../sections/img/leftHand.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flex:3}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1
    },
    imagesStyle: {
        width: undefined,
        height: undefined,
        flex: 8,
        flexDirection: 'row'
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
    },
    buttons: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    }
});