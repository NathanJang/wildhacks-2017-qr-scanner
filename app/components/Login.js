// @flow

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
    Image,
    View,
    ScrollView
} from 'react-native';


import styles from '../styles/login';

import ActivityView from './ActivityView';

export default class Login extends Component {
    constructor(props) {
        super(props);
            this.state = {
        };
    }

    onSearchTextChanged(event) {
        this.setState({searchString: event.nativeEvent.text});
    }

    _handleResponse(){
        this.props.navigator.push({
        title: 'Results',
        component: ActivityView,
        passProps: {myElement: 'text'}
        });
    }

    render(){
        const spinner = this.state.isLoading
            ? (<ActivityIndicator size = 'large'/>)
            : (<View/>);

        return(
            <ScrollView contentContainerStyle = {styles.container}>

            <Text style = {styles.description}>
                Wildhack Admin Log In
            </Text>


            <TextInput
                style = {styles.username}
                value = {this.state.searchString}
                onChange = {this.onSearchTextChanged.bind(this)}
                placeholder = 'Enter your username'
            />

            <Text></Text>

            <TextInput
                style = {styles.password}
                value = {this.state.searchString}
                onChange = {this.onSearchTextChanged.bind(this)}
                placeholder = 'Enter your password'
            />

            <Text></Text>

            <View style = {styles.flowRight}>
                <TouchableHighlight
                    style = {styles.button}
                    underlayColor = '#99d9f4'
                    onPress={()=>this._handleResponse()}
                >
                    <Text style = {styles.buttonText}>Submit</Text>
                </TouchableHighlight>
            </View>

            {spinner}
            <Text style = {styles.description}>{this.state.message}</Text>

            </ScrollView>
        );

    }

}
