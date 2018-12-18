import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Header } from '../sections/Header.js';

export class OneEmotionYoursPast extends React.Component {
    static navigationOptions = {
		header: null
    };

    rangePressed=(range) => {
        let levels = this.props.navigation.state.params.levels;
        let title = this.props.navigation.state.params.title;
        const allRanges = require('../sections/config/initialRangeToOtherRanges.json');
        const ranges = allRanges[range];
        if(ranges && ranges.length > 0){
            this.props.navigation.navigate('OneEmotionYoursPastRT',
            {
                title: title,
                levels:levels, 
                ranges:ranges
            }
        );
        }
        else{
            this.props.navigation.navigate('OneEmotionWhyRT',
            {
                title: title + " at age " + range,
                levels:[{title: title + " at age " + range, route: 'OneEmotionsYours'}].concat(levels), 
            })
        }
        
    }

    render(){
        const { navigate } = this.props.navigation;
        const levels = this.props.navigation.state.params.levels;
        const ranges = this.props.navigation.state.params.ranges;

        return (
            <View style={styles.container}>
				<Header 
					navigate={navigate} 
					message='Logout'
					levels={levels}
				/>
                <View style={styles.whose}>
                    {ranges.map((range,index)=>
                         <TouchableOpacity key={index} style={styles.buttonStyles} onPress={() => this.rangePressed(range)}>
                            <Text key={index} styles={styles.buttonText}> {range} </Text>
                        </TouchableOpacity>
                    )}
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