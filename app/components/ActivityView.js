// @flow

import React from 'react';

import {
    Component,
    Text,
    View,
    FlatList
} from 'react-native';

import styles from '../styles/activityView';

export default class ActivityView extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static renderItem(item) {
        return (<Text style={styles.item}>{item.key}</Text>);
    }

    render() {
        return (<View style={styles.container}>
            <FlatList
                data={[
                    {key: 'Registration'},
                    {key: 'Meal'},
                    {key: 'Activity'},
                ]}
                renderItem={this.renderItem}
            />
            <View style={styles.separator} />
        </View>);
    }
}
