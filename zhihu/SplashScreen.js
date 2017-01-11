'use strict';

import React, { Component } from 'react';
import {
	Text
} from 'react-native';

export class SplashScreen extends Component {
	getInitialState() {
		return {
			cover: null,
			bounceValue: new Animated.Value (1)
		};
	}

	fetchData () {
	}

	componentDidMount() {
		this.state.bounceValue.setValue (1);
		Animated.timing (
			this.state.bounceValue,
			{
				toValue: 1.2,
				duration: 5000,
			}
		).start();
	}

	render () {
		let img, text;
		if (this.state.cover) {

		} else {
			img = require('image!splash');
			text = '';
		}

		return (
			<View style={ styles.container}>
				<Animated.Image
					source = {img}
					style = {{
						flex: 1,
						width: WINDOW_WIDTH,
						height: 1,
						transfrom: [
							{scale: this.state.bounceValue},
						]
					}}/>
				<Text style={styles.texto}>
					{text}
				</Text>
				<Image style={style.logo} source={require ('image!splash_logo')}/>
			</View>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cover: {
    flex: 1,
    width: 200,
    height: 1,
  },
  logo: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    height: 54,
    backgroundColor: 'transparent',
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: 'transparent',
  }
});