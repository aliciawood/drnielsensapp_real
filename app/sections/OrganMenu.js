import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class OrganMenu extends React.Component {

    organPressed=(organ) => {
        this.props.organPressed(organ);
    }

    render(){
        let organs = this.props.organs;
        let organsToColors = require('../sections/config/organsToColors.json');
        return (
            <View style={styles.organs}>
                <View style={styles.organRow}>
                    <TouchableOpacity style={[styles.buttonStyles,{backgroundColor:organsToColors[organs[0]]}]} onPress={() => this.organPressed(organs[0])}>
                        <Text style={styles.buttonText}>{organs[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonStyles,{backgroundColor:organsToColors[organs[3]]}]} onPress={() => this.organPressed(organs[3])}>
                        <Text style={styles.buttonText}>{organs[3]}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.organRow}>
                    <TouchableOpacity style={[styles.buttonStyles,{backgroundColor:organsToColors[organs[1]]}]} onPress={() => this.organPressed(organs[1])}>
                        <Text style={styles.buttonText}>{organs[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonStyles,{backgroundColor:organsToColors[organs[4]]}]}onPress={() => this.organPressed(organs[4])}>
                        <Text style={styles.buttonText}>{organs[4]}</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.organRow}>
                    <TouchableOpacity style={[styles.buttonStyles,{backgroundColor:organsToColors[organs[2]]}]} onPress={() => this.organPressed(organs[2])}>
                        <Text style={styles.buttonText}>{organs[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonStyles,{backgroundColor:organsToColors[organs[5]]}]} onPress={() => this.organPressed(organs[5])}>
                        <Text style={styles.buttonText}>{organs[5]}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.organRow}>
                    <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:organsToColors[organs[6]]}]} onPress={() => this.organPressed(organs[6])}>
                        <Text style={styles.buttonText}>{organs[6]}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    organs: {
        flex: 4,
        flexDirection: 'column'
    },
    organRow: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'grey',
        borderBottomWidth: 1,
        backgroundColor: 'lightgrey',
    },
    buttonStyles: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderLeftWidth: 1,
    },
    buttonStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderLeftWidth: 1,
    },
    buttonText: {
        fontSize: 18
    }
});