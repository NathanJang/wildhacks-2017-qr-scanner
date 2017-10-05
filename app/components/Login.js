// @flow

import React, { Component } from 'react';

import {
    Text,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
    Image,
    View,
    ScrollView
} from 'react-native';

import PropTypes from 'prop-types';

import styles from '../styles/login';

import ActivityView from './ActivityView';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSearchTextChanged = this.onSearchTextChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
    }

    static propTypes = {
        navigator: PropTypes.object.isRequired
    }

    onSearchTextChanged(event) {
        this.setState({searchString: event.nativeEvent.text});
    }

    handleSubmit() {
        this.props.navigator.push({
            title: 'Results',
            component: ActivityView,
            passProps: {myElement: 'text'}
        });
    }

    handleUsernameSubmit() {
        this.passwordInput.focus();
    }

    handlePasswordInput(input) {
        this.passwordInput = input;
    }

    render() {
        const spinner = this.state.isLoading
            ? (<ActivityIndicator size='large'/>)
            : (<View/>);

        return (
            <KeyboardAwareScrollView
              contentContainerStyle={styles.container}
              resetScrollToCoords={{ x: 0, y: 0 }}
              scrollEnabled={false}
            >

                <Image source={require('../assets/wildhackslogo.png')} style={styles.image}/>

                <Text style={styles.description}>
                    Wildhacks Admin Log In
                </Text>


                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={this.handleUsernameSubmit}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Username'
                    placeholderTextColor='rgba(0,0,225,0.7)'
                />

                <TextInput style = {styles.input}
                    returnKeyType="go"
                    ref={this.handlePasswordInput}
                    placeholder='Password'
                    placeholderTextColor='rgba(0,0,225,0.7)'
                    secureTextEntry
                />


                <Text></Text>

                <View style={styles.flowRight}>
                    <TouchableHighlight
                        style={styles.button}
                        underlayColor='#99d9f4'
                        onPress={this.handleSubmit}
                    >
                        <Text style = {styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                </View>

                {spinner}
                <Text style={styles.description}>{this.state.message}</Text>

            </KeyboardAwareScrollView>
        );

    }

}
