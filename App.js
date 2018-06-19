/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import Login from './src/components/Login';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
		<Login />
		);
	}
}
