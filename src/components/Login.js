import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

type Props = {};
export default class Login extends Component<Props> {
	render() {
		return (
		<View style={styles.container}>
			<TextInput style={styles.emailField} placeholder='Email address' />
			<Button style={styles.submitButton} title='Submit' />
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	emailField: {
		fontSize: 20,
		textAlign: 'center',
		width: 200,
		margin: 10
	},
	submitButton: {
		textAlign: 'center',
		width: 200
	},
});
