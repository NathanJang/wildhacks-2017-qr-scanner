// @flow

import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList
} from 'react-native';

import styles from '../styles/activityView';

export default class ActivityView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: 'Registration'},
                {key: 'Meal'},
                {key: 'Activity'}
            ]
        };
    }

    renderItem = ({item}) => (
        <Text style={styles.item}>
            {item.key}
        </Text>
    )

    render() {
        return (<View style={styles.container}>
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
            />
            <View style={styles.separator} />
        </View>);
    }
}
