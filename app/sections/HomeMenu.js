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
                        <Text style={styles.buttonText}> Test Statements </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}> Feelings </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}> Thoughts </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}> Physical </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 14,
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'grey',
        borderBottomWidth: .5
    }, 
    buttonStyles: {
        backgroundColor: 'white',
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderLeftWidth: .5,
    },
    buttonText: {
        color: 'black',
        fontSize: 24
    }
});