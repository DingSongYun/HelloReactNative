'use strict';

import React, { Component } from 'react';
import {
	AppRegistry,
	Navigator
} from 'react-native';
import SplashScreen from 'SplashScreen'

export class RCTZhiHuDaily extends Component {
	getInitialState () {
		return {
			splashed: false,
		};
	}

	render () {
		if (this.state.splashed) {
		} else {
			return (
				<SplashScreen />
			);
		}
	}

	componentDidMount () {
		this.setTimeout (
			() => {
				this.setState ({splashed: true});
			},
			2000,
		);
	}
}