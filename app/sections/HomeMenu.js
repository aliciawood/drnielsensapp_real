import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class HomeMenu extends React.Component {

    onPress = () => {
        Alert.alert("Coming Soon!");
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('TestStatementsRT')}>
                        <Text styles={styles.buttonText}> TEST STATEMENTS </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text styles={styles.buttonText}> FEELINGS </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text styles={styles.buttonText}> THOUGHTS </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text styles={styles.buttonText}> PHYSICAL </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 14,
        backgroundColor: 'lightgrey'
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    }, 
    buttonStyles: {
        backgroundColor: 'lightgrey',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderLeftWidth: 1
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18
    }
});