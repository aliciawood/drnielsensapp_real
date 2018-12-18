import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';


export class LeftHand extends React.Component {
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
                <View style={styles.imagesStyle}>
                    <TouchableOpacity style={styles.buttons} onPress={this.rightHandPressed}>
                        <Image
                            style={styles.image}
                            source={ require('../sections/img/leftHand.jpg')}
                        />
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
    imagesStyle: {
        width: undefined,
        height: undefined,
        flex: 12,
        flexDirection: 'row'
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
    },
    buttons: {
        flex: 1,
    }
});