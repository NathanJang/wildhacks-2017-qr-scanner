import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Image
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay'

import styles from '../styles/events';
import navigatorStyle from '../styles/navigator-style'

import api from '../util/wildhacks-api'

export default class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };

        this.renderItem = this.renderItem.bind(this)

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    }

    static navigatorStyle = navigatorStyle

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
                this.props.navigator.setTitle({title: 'Connection Error. Restart App', isLoading: false})
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
            <TouchableHighlight
                onPress={() => this.handleItemPress(item)}
                underlayColor={'rgba(0, 0, 0, 0.2)'}
                style={styles.item}
            >
                <View style={styles.itemContent}>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1} style={styles.title}>
                            {item.name}
                        </Text>
                        <Text style={styles.subtitle}>
                            {item.description || 'No description.'}
                        </Text>
                    </View>
                    <Image source={require('../assets/DetailDisclosureIndicator.png')} style={styles.caret} resizeMode={'contain'}/>
                </View>
            </TouchableHighlight>
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
                    style={styles.fullWidth}
                />
            </View>
        )
    }
}
