// @flow

import React, { Component } from 'react';

import {
    Text,
    View,
    FlatList,
    TouchableHighlight,
} from 'react-native';

import styles from '../styles/activityView';

import MealPage from './MealPage';

import ActivityPage from './ActivityPage';

import Scanner from './Scanner';

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
        this.handleMeals = this.handleMeals.bind(this);
        this.handleActivities = this.handleActivities.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
    }

    handleMeals() {
        this.props.navigator.push({
            title: 'Meals',
            component: MealPage,
            passProps: {myElement: 'text'}
        });
    }

    handleActivities() {
        this.props.navigator.push({
            title: 'Activities',
            component: ActivityPage,
            passProps: {myElement: 'text'}
        });
    }
    
    handleRegistration() {
        this.props.navigator.push({
            title: 'Registration',
            component: Scanner,
            passProps: {myElement: 'Register'}
        });
    }

    render() {
        return (<View style={styles.container}>
            <TouchableHighlight
              onPress={this.handleRegistration}
            >
                <View style={styles.row}>
                    <Text style={styles.item}>
                        Registration
                    </Text>
                </View>
            </TouchableHighlight>

            <Text style={styles.space}></Text>

            <TouchableHighlight 
                onPress={this.handleMeals}
            >
                <View style={styles.row}>
                    <Text style={styles.item}>
                        Meals
                    </Text>
                </View>
            </TouchableHighlight>

            <Text style={styles.space}></Text>

            <TouchableHighlight
                onPress={this.handleActivities}
            >
                <View style={styles.row}>
                    <Text style={styles.item}>
                        Activities
                    </Text>
                </View>
            </TouchableHighlight>
        </View>);
    }
}
