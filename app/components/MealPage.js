
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
    }
    
    handleScan1() {
        this.props.navigator.push({
            title: 'Breakfast',
            component: Scanner,
            passProps: {myElement: 'text'}
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

          <TouchableHighlight>
              <View style={styles.row}>
                  <Text style={styles.item}>
                      Lunch
                  </Text>
              </View>
          </TouchableHighlight>

          <Text style={styles.space}></Text>

          <TouchableHighlight>
              <View style={styles.row}>
                  <Text style={styles.item}>
                      Dinner
                  </Text>
              </View>
          </TouchableHighlight>
        </View>);
    }
}
