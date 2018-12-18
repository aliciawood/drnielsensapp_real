import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import { HomeMenu } from '../sections/HomeMenu.js';
import { StackNavigator } from 'react-navigation';

export class Home extends React.Component {
	static navigationOptions = {
		header: null
	};
    render(){
		const { navigate } = this.props.navigation;
        return (
			<View style={styles.container}>
				<Header 
					navigate={navigate} 
					message='Logout'
					levels={[]}
				/>
				<HomeMenu navigate={navigate} />
			</View>
		);
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1
	}
});