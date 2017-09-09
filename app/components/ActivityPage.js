
import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import styles from '../styles/activityView';

export default class ActivityView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: 'Lightning Talks'},
                {key: 'Karaoke'},
                {key: 'Swing Dancing'},
                {key: 'Beat Boxing'},
                {key: 'Dodgeball'},
            ]
        };
    }

    renderItem = ({item}) => (
        <TouchableHighlight
          onPress={this.handleMeals}
        >
          <View style={styles.activity_rows}>
            <Text style={styles.item}>
              {item.key}
            </Text>
          </View>

        </TouchableHighlight>
    )


    render() {
        return (<ScrollView contentContainerStyle={styles.container}>
          <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
          />

        </ScrollView>);
    }
}
