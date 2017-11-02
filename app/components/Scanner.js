import React, { Component } from 'react';

import {
    Text,
    View,
    Linking,
    Vibration,
    Dimensions,
    Alert
} from 'react-native';

import Camera from 'react-native-camera';

import Spinner from 'react-native-loading-spinner-overlay'

import styles from '../styles/scannerstyles';

import api from '../util/wildhacks-api'

export default class Scanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scanning: true
        };
    }

    render() {
      return (
        <View style={styles.container}>
          <Spinner visible={!this.state.scanning}/>
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
      // else {
      //   return (
      //     <View style={styles.scan_container}>
      //       <Text style={styles.item}>
      //         Go Back!
      //       </Text>
      //     </View>
      //   );
      // }
    }

    static userInfoFromQrString(qrString) {
      if (typeof qrString !== 'string') { return null }
      const components = qrString.match(/^wh17::(.+)$/)
      if (!components || components.length !== 2) { return null }
      return {
        email: components[1]
      }
    }

    _onBarCodeRead(e) {
      if (this.state.scanning) {
        Vibration.vibrate();
        this.setState({scanning: false});
        // AlertIOS.alert(
        //     "ID: " + e.data
        // );
        const userInfo = Scanner.userInfoFromQrString(e.data)
        if (!userInfo || !userInfo.email) {
          Alert.alert(`ERROR: Invalid QR Code`, `Scanned: ${e.data}`, [{ text: 'Okay', onPress: () => this.setState({scanning: true}), style: 'default' }])
          return
        }
        api.getUserDetails({ userEmail: userInfo.email }).then(user => {
          if (!user) {
            Alert.alert('ERROR: User not found on server.', `Scanned email: ${userInfo.email}`, [{ text: 'Okay', onPress: () => this.setState({scanning: true}), style: 'default' }])
            return
          }
          if (!(typeof user.id === 'number')) {
            Alert.alert('ERROR: Unexpected response from server.', `Scanned email: ${userInfo.email}`, [{ text: 'Okay', onPress: () => this.setState({scanning: true}), style: 'default' }])
            return
          }
          Alert.alert(
          `${userInfo.email} at ${this.props.item.name}?`,
          '',
          [
            {
              text: 'Cancel',
              onPress: () => {this.setState({scanning: true})},
              style: 'cancel'
            },
            {
              text: 'Confirm',
              onPress: () => {
                api.checkUserIn({
                  userId: user.id,
                  eventId: this.props.item.id
                }).then(response => {
                  Alert.alert(
                    (() => {
                      if (response.success === undefined) {
                        return 'ERROR: Unexpected response from server.'
                      }
                      if (response.success === false) {
                        return 'WARNING: User has already checked in.'
                      }
                      return 'Check-In Sucessful!'
                    })(),
                    response.message || 'Server provided no information.',
                    [{
                      text: 'Continue',
                      onPress: () => {
                        this.setState({scanning: true})
                      },
                      style: response.success ? 'default' : 'destructive'
                    }]
                  )
                })
              },
              style: 'destructive'
            },
          ]
        )
        })
      }
    }
}
