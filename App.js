import React from 'react';
import { Home } from './app/views/Home.js';
import { TestStatementsHome } from './app/views/TestStatementsHome.js';
import { BothHands } from './app/views/BothHands.js';
import { LeftHand } from './app/views/LeftHand.js';
import { RightHand } from './app/views/RightHand.js';
import { OneOrgan } from './app/views/OneOrgan.js';
import { OneEmotion } from './app/views/OneEmotion.js';
import { OneEmotionYours } from './app/views/OneEmotionYours.js';
import { OneEmotionYoursPast } from './app/views/OneEmotionYoursPast.js';
import { OneEmotionSomeoneElses} from './app/views/OneEmotionSomeoneElses.js';
import { OneEmotionWhy } from './app/views/OneEmotionWhy.js';
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
	},
	OneOrganRT:{
		screen: OneOrgan
	},
	OneEmotionRT:{
		screen: OneEmotion
	},
	OneEmotionYoursRT:{
		screen: OneEmotionYours
	},
	OneEmotionYoursPastRT:{
		screen: OneEmotionYoursPast
	},
	OneEmotionSomeoneElsesRT:{
		screen: OneEmotionSomeoneElses
	},
	OneEmotionWhyRT:{
		screen: OneEmotionWhy
	},
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


