
import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';

import styles from '../styles/activityView';

import Scanner from './Scanner';

export default class MealPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: 'Breakfast'},
                {key: 'Lunch'},
                {key: 'Dinner'}
            ]
        };
        this.handleScan1 = this.handleScan1.bind(this);
        this.handleScan2 = this.handleScan2.bind(this);
        this.handleScan3 = this.handleScan3.bind(this);
    }
    
    handleScan1() {
        this.props.navigator.push({
            title: 'Breakfast',
            component: Scanner,
            passProps: {myElement: 'Breakfast'}
        });
    }
    
    handleScan2() {
        this.props.navigator.push({
            title: 'Lunch',
            component: Scanner,
            passProps: {myElement: 'Lunch'}
        });
    }

    handleScan3() {
        this.props.navigator.push({
            title: 'Dinner',
            component: Scanner,
            passProps: {myElement: 'Dinner'}
        });
    }

    render() {
        return (<View style={styles.container}>
          <TouchableHighlight
              onPress={this.handleScan1}
          >
              <View style={styles.row}>
                  <Text style={styles.item}>
                      Breakfast
                  </Text>
              </View>
          </TouchableHighlight>

          <Text style={styles.space}></Text>

          <TouchableHighlight
              onPress={this.handleScan2}
          >
              <View style={styles.row}>
                  <Text style={styles.item}>
                      Lunch
                  </Text>
              </View>
          </TouchableHighlight>

          <Text style={styles.space}></Text>

          <TouchableHighlight
              onPress={this.handleScan3}
          >
              <View style={styles.row}>
                  <Text style={styles.item}>
                      Dinner
                  </Text>
              </View>
          </TouchableHighlight>
        </View>);
    }
}
