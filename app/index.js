// @flow

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';

import Login from './components/Login';
import styles from './styles/index';

export default class Wildhacks2017QRScanner extends Component {
    render() {
        return (
            <NavigatorIOS
                  style = {styles.container}
                  initialRoute={{
                    title: 'QR Scanner',
                    component: Login
                  }}
            />
        );
    }
}

AppRegistry.registerComponent('Wildhacks2017QRScanner', () => Wildhacks2017QRScanner);
