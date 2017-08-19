'use strict';

import React, {Component} from 'react'
import{
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  View,
  ScrollView
} from 'react-native';


var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: "#656565"
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  username: {
    height: 36,
    padding: 4,
    marginRight: 4,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  password: {
    height: 36,
    padding: 4,
    marginRight: 4,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
  },
  scroll: {
      backgroundColor: '#E1D7D8',
      padding: 30,
      flexDirection: 'column'
  },
});

var ActivityView = require('./ActivityView');

class Login extends Component {
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
    var spinner = this.state.isLoading ?
    ( <ActivityIndicator
      size = 'large'/>):
      (<View/>);

    return(
    <ScrollView contentContainerStyle = {styles.container}>

    <Text style = {styles.description}>
    Wildhack Admin Log In
    </Text>


    <TextInput
    style = {styles.username}
    value = {this.state.searchString}
    onChange = {this.onSearchTextChanged.bind(this)}
    placeholder = 'Enter your username'/>

    <Text></Text>

    <TextInput
    style = {styles.password}
    value = {this.state.searchString}
    onChange = {this.onSearchTextChanged.bind(this)}
    placeholder = 'Enter your password'/>

    <Text></Text>

    <View style = {styles.flowRight}>
    <TouchableHighlight style = {styles.button}
    underlayColor = '#99d9f4'
    onPress={()=>this._handleResponse()}>
    <Text style = {styles.buttonText}>Submit</Text>
    </TouchableHighlight>
    </View>

    {spinner}
    <Text style = {styles.description}>{this.state.message}</Text>

    </ScrollView>
    );

    }

}

module.exports = Login;
