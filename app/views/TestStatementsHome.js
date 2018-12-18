import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Picker } from 'react-native';
import { Header } from '../sections/Header.js';
import { StackNavigator } from 'react-navigation';

export class TestStatementsHome extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state = {
            firstPartOfTestStatement: "I am willing to...",
            secondPartOfTestStatement: '',
        };
    }

    clearFields=() => {
        this.setState({firstPartOfTestStatement:'',secondPartOfTestStatement:''});
    }

    sendMessage=() => {
        let wholeTestStatement = this.state.firstPartOfTestStatement.substr(0, this.state.firstPartOfTestStatement.length-3) + ' ' + this.state.secondPartOfTestStatement.charAt(0).toLowerCase() + this.state.secondPartOfTestStatement.slice(1);
        this.props.navigation.navigate('BothHandsRT',{levels: [{title: wholeTestStatement, route: 'TestStatementsRT'}]});
    }

    render(){
        const { navigate } = this.props.navigation;
        const levels = [];
        let wholeTestStatement = this.state.firstPartOfTestStatement.substr(0, this.state.firstPartOfTestStatement.length-3) 
        + ' ' + this.state.secondPartOfTestStatement.charAt(0).toLowerCase() + this.state.secondPartOfTestStatement.slice(1);
        return (
			<View style={styles.container}>
				<Header 
					navigate={navigate} 
					message='Logout'
					levels={levels}
				/>
                <Picker
                    style={styles.picker}
                    selectedValue={this.state.firstPartOfTestStatement}
                    textStyle={{fontSize: 12}}
                    onValueChange={(itemValue, itemIndex) => this.setState({firstPartOfTestStatement: itemValue})}>
                    <Picker.Item label="I am willing to..." value="I am willing to..." />
                    <Picker.Item label="I am ready to..." value="I am ready to..." />
                    <Picker.Item label="I am ready, willing, and able to..." value="I am ready, willing, and able to..." />
                </Picker>
                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({secondPartOfTestStatement:text})}
                    value={this.state.secondPartOfTestStatement}
                    placeholder="Complete the Test Statement"
                    clearButtonMode="always"
                />
                <View style={styles.wrapText}>
                    <Text style={styles.testStatement}> {wholeTestStatement} </Text>
                </View>
                <TouchableHighlight onPress={this.sendMessage} underlayColor='lightgrey'>
                    <Text style={styles.buttons}>
                        Test Statement is Weak
                    </Text>
                </TouchableHighlight>
			</View>
		);
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '30%',
        backgroundColor: 'white'
    },
    wrapText: {
        borderColor: 'grey',
        borderTopWidth: 1,
        flexDirection: 'row',
        paddingTop: 10,
        textAlign: 'left'
    },
    testStatement: {
        fontSize: 20,
        flex: 1,
        padding: 10,
        textAlign: 'center',
        width: '90%',
        flexWrap: 'wrap'
    },
    picker: {
        flex: 4,
        paddingBottom: 70,
        width: '80%',
    },
    inputs: {
        flex: 1,
        width: '90%',
        padding: 10,
        fontSize: 16,
    },
    multiInput: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16,
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '80%'
    }
});