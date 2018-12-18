import React from 'react';
import { Home } from './app/views/Home.js';
import { TestStatementsHome } from './app/views/TestStatementsHome.js';
import { BothHands } from './app/views/BothHands.js';
import { LeftHand } from './app/views/LeftHand.js';
import { RightHand } from './app/views/RightHand.js';
import { StackNavigator } from 'react-navigation';

const MyRoutes = StackNavigator({
	HomeRT:{
		screen: Home
	},
	TestStatementsRT:{
		screen: TestStatementsHome
	},
	BothHandsRT:{
		screen: BothHands
	},
	LeftHandRT:{
		screen: LeftHand
	},
	RightHandRT:{
		screen: RightHand
	}
},
	{
		initialRouteName: 'HomeRT'
	}
);

export default class App extends React.Component {
	render() {
		return (
			<MyRoutes />
		);
	}
}


