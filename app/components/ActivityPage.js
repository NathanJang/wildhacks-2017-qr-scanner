
import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import styles from '../styles/activityView';

import Scanner from './Scanner';

export default class ActivityView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: 'Lightning Talks'},
                {key: 'Super Smash Tournament'},
                {key: 'Cup Stacking'}
            ]
        };
        this.handleScan1 = this.handleScan1.bind(this);
        this.handleScan2 = this.handleScan2.bind(this);
        this.handleScan3 = this.handleScan3.bind(this);
    }

    handleScan1() {
        this.props.navigator.push({
            title: 'Lighning Talks',
            component: Scanner,
            passProps: {myElement: 'Lightning'}
        });
    }

    handleScan2() {
        this.props.navigator.push({
            title: 'Super Smash Tournament',
            component: Scanner,
            passProps: {myElement: 'Smash'}
        });
    }

    handleScan3() {
        this.props.navigator.push({
            title: 'Cup Stacking',
            component: Scanner,
            passProps: {myElement: 'Stacking'}
        });
    }

    render() {
        return (<View style={styles.container}>
          <TouchableHighlight
              onPress={this.handleScan1}
          >
              <View style={styles.row}>
                  <Text style={styles.item}>
                      Lightning
                  </Text>
              </View>
          </TouchableHighlight>

          <Text style={styles.space}></Text>

          <TouchableHighlight
            onPress={this.handleScan2}
          >
              <View style={styles.row}>
                  <Text style={styles.item}>
                      Super Smash
                  </Text>
              </View>
          </TouchableHighlight>

          <Text style={styles.space}></Text>

          <TouchableHighlight
            onPress={this.handleScan3}
          >
              <View style={styles.row}>
                  <Text style={styles.item}>
                      Cup Stacking
                  </Text>
              </View>
          </TouchableHighlight>
        </View>);
    }
}

