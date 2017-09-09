
import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';

import styles from './activitystyles';

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
    }

    render() {
        return (<View style={styles.container}>
          <TouchableHighlight>
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
