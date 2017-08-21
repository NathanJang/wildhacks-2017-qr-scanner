/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS
} from 'react-native';

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

var Login = require('./Login');

export default class QRscanner extends React.Component {
  render() {
    return (
      <NavigatorIOS
      style = {styles.container}
      initialRoute={{
        title: 'QR Scanner',
        component: Login
      }}/>
    );
  }
}



AppRegistry.registerComponent('QRscanner', () => QRscanner);
