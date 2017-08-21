// @flow

import React from 'react';

import {
    Component,
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

import logo from '../assets/wildhackslogo.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        navigator: PropTypes.array.isRequired
    }

    onSearchTextChanged(event) {
        this.setState({searchString: event.nativeEvent.text});
    }

    handleResponse() {
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
            <ScrollView contentContainerStyle={styles.container}>

                <Image source={logo} style={styles.image}/>

                <Text style = {styles.description}>
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

                <View style = {styles.flowRight}>
                    <TouchableHighlight
                        style = {styles.button}
                        underlayColor = '#99d9f4'
                        onPress={this.handleResponse}
                    >
                        <Text style = {styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                </View>

                {spinner}
                <Text style={styles.description}>{this.state.message}</Text>

            </ScrollView>
        );

    }

}
