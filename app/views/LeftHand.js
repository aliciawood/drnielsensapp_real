import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';
import { OrganMenu } from '../sections/OrganMenu.js';


export class LeftHand extends React.Component {
    static navigationOptions = {
		header: null
    };

    organPressed=(organ) => {
        let levels = this.props.navigation.state.params.levels;
        this.props.navigation.navigate('OneOrganRT',{levels:[{title: organ, route: 'LeftHandRT'}].concat(levels), organ:organ});
    }

    render(){
        const { navigate } = this.props.navigation;
        const levels = this.props.navigation.state.params.levels;
        const organs = ['Kidney','Liver','Heart','Bladder','Gall Bladder','Small Intestine','GV CV'];
        return (
            <View style={styles.container}>
				<Header 
					navigate={navigate} 
					message='Logout'
					levels={levels}
				/>
                <View style={styles.imagesStyle}>
                    <Image
                        style={styles.image}
                        source={ require('../sections/img/leftHand.jpg')}
                    />
                </View>
                <OrganMenu organs={organs} organPressed={this.organPressed} />
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
        flex: 10,
        flexDirection: 'row'
    },
    image: {
        width: undefined,
        height: undefined,
        flex: 1,
    },
});