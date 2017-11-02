// @flow

import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
    TouchableHighlight,
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay'

import styles from '../styles/activityView';

import api from '../util/wildhacks-api'

export default class ActivityView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };

        this.renderItem = this.renderItem.bind(this)

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))


    }

    onNavigatorEvent(event) {
        if (event.id === 'didAppear') {
            this.setState({isLoading: true})
            api.getEvents().then(events => {
                setTimeout(() => {
                    this.setState({
                        data: events,
                        isLoading: false
                    })
                }, 300)
            }).catch(() => {
                this.props.navigator.setTitle({title: 'Connection Error. Restart App'})
            })
        }
    }

    handleItemPress(item) {
        this.props.navigator.push({
            screen: 'Scanner',
            title: `${item.name}`,
            passProps: { item }
        })
    }

    renderItem({item}) {
        return (
            <View style={styles.activity_rows}>
                <TouchableHighlight
                    onPress={() => this.handleItemPress(item)}
                >
                    <View style={styles.row}>
                        <Text style={styles.item} numberOfLines={1}>
                            {item.id}: {item.name}
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner visible={this.state.isLoading}/>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}
