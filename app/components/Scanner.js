import React, { Component } from 'react';

import {
  Text,
  View,
  Linking,
  Vibration,
  Dimensions
} from 'react-native';

import Camera from 'react-native-camera';

import styles from './scannerstyles';

export default class Scanner extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getInitialState() {
        return {
            showCamera: true,
            cameraType: Camera.constants.Type.back
        }
    }

    renderCamera() {
        if(this.state.showCamera) {
            return (
                <Camera
                    ref="cam"
                    style={styles.container}
                    onBarCodeRead={this._onBarCodeRead}
                    type={this.state.cameraType}>
                </Camera>
            );
        } else {
            return (
                <View></View>
            );
        }
    }

    render() {
        return (
            this.renderCamera()
        );
    }

    _onBarCodeRead(e) {
        this.setState({showCamera: false});
        AlertIOS.alert(
            "Scan successful",
            "Type: " + e.type + "\nData: " + e.data
        );
    }

}
