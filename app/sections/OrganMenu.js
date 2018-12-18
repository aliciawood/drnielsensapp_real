import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class OrganMenu extends React.Component {

    organPressed=(organ) => {
        this.props.organPressed(organ);
    }

    render(){
        let organs = this.props.organs;
        return (
            <View style={styles.organs}>
                <View style={styles.organRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.organPressed(organs[0])}>
                        <Text style={styles.buttonText}>{organs[0].toUpperCase()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.organPressed(organs[1])}>
                        <Text style={styles.buttonText}>{organs[1].toUpperCase()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.organPressed(organs[2])}>
                        <Text style={styles.buttonText}>{organs[2].toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.organRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.organPressed(organs[3])}>
                        <Text style={styles.buttonText}>{organs[3].toUpperCase()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.organPressed(organs[4])}>
                        <Text style={styles.buttonText}>{organs[4].toUpperCase()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.organPressed(organs[5])}>
                        <Text style={styles.buttonText}>{organs[5].toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.organRow}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.organPressed(organs[6])}>
                        <Text style={styles.buttonText}>{organs[6].toUpperCase()}</Text>
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
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        backgroundColor: 'lightgrey',
    },
    organText: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
        
    },
    buttonStyles: {
        width: '33%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderLeftWidth: 1
    },
    buttonStyle: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderLeftWidth: 1
    },
    buttonText: {
        fontSize: 14
    }
});