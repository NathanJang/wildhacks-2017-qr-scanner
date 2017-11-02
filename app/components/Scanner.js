import React, { Component } from 'react';

import {
    View,
    Vibration,
    Alert
} from 'react-native';

import Camera from 'react-native-camera';

import Spinner from 'react-native-loading-spinner-overlay'

import Prompt from 'react-native-prompt'

import styles from '../styles/scanner';
import navigatorStyle from '../styles/navigator-style'

import api from '../util/wildhacks-api'

export default class Scanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scanning: true,
            promptIsVisible: false
        };
        this.onNavigatorEvent = this.onNavigatorEvent.bind(this)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        this._onBarCodeRead = this._onBarCodeRead.bind(this)
        this._receivedUserInfo = this._receivedUserInfo.bind(this)
    }

    static navigatorStyle = navigatorStyle

    static navigatorButtons = {
      rightButtons: [
        {
          title: 'Manual Entry', // for a textual button, provide the button title (label)
          id: 'manual', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          // showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
          // buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
          // buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
          // buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
        }
      ]
    };

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
      if (event.type === 'NavBarButtonPress') { // this is the event type for button presses
        if (event.id === 'manual') { // this is the same id field from the static navigatorButtons definition
          this.setState({promptIsVisible: true})
        }
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <Spinner visible={!this.state.scanning}/>
          <Camera
            ref={cam => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            onBarCodeRead={this._onBarCodeRead}
          >
          </Camera>
          <Prompt
            title="Enter an Email"
            placeholder="Attendee's Email"
            visible={ this.state.promptIsVisible }
            onCancel={() => {
              this.setState({
                promptIsVisible: false
              })
            }}
            onSubmit={ email => {
              this.setState({
                promptIsVisible: false
              })
              this._receivedUserInfo({ email })
            }}
            textInputProps={{
              keyboardType: 'email-address',
              autoCapitalize: 'none',
              autoCorrect: false
            }}
          />
        </View>
      );
    }

    static userInfoFromQrString(qrString) {
      if (typeof qrString !== 'string') { return null }
      const components = qrString.match(/^wh17::(.+)$/)
      if (!components || components.length !== 2) { return null }
      return {
        email: components[1]
      }
    }

    _receivedUserInfo(userInfo) {
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
                        return 'ERROR: Unexpected response from server. Try again.'
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

    _onBarCodeRead(e) {
      if (this.state.scanning) {
        Vibration.vibrate();
        this.setState({scanning: false});
        const userInfo = Scanner.userInfoFromQrString(e.data)
        if (!userInfo || !userInfo.email) {
          Alert.alert(`ERROR: Invalid QR Code`, `Scanned: ${e.data}`, [{ text: 'Okay', onPress: () => this.setState({scanning: true}), style: 'default' }])
          return
        }
        this._receivedUserInfo(userInfo)
    }
  }
}
