import React, { Component } from 'react';

import {
  Text,
  View,
  Linking,
  Vibration,
  Dimensions,
  AlertIOS
} from 'react-native';

import Camera from 'react-native-camera';

import styles from '../styles/scannerstyles';

export default class Scanner extends Component {

  constructor(props) {
      super(props);
      this.state = {
          scanning: true
      };
  }

  render() {
    if (this.state.scanning) {
      return (
        <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            onBarCodeRead={this._onBarCodeRead.bind(this)}
            >
          </Camera>
        </View>
      );
    }
    else {
      return (
        <View style={styles.scan_container}>
          <Text style={styles.item}>
            Go Back!
          </Text>
        </View>
      );
    }
  }

    _onBarCodeRead(e) {
        Vibration.vibrate();
        this.setState({scanning: false});
        AlertIOS.alert(
            "ID: " + e.data
        );
    }

}
