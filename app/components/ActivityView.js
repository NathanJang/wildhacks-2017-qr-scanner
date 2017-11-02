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

// import MealPage from './MealPage';

// import ActivityPage from './ActivityPage';

// import Scanner from './Scanner';

import api from '../util/wildhacks-api'

export default class ActivityView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // data: [
            //     {key: 'Registration'},
            //     {key: 'Meal'},
            //     {key: 'Activity'}
            // ]
            data: [/*{
                "id": 1,
                "name": "Check-In",
                "description": "Go hacks",
                "metaValue": "",
                "createdAt": "2017-10-31T11:42:57.000Z",
                "updatedAt": "2017-10-31T11:42:57.000Z"
            },
            {
                "id": 2,
                "name": "Workshop 1",
                "description": "Go hacks",
                "metaValue": "",
                "createdAt": "2017-10-31T11:42:57.000Z",
                "updatedAt": "2017-10-31T11:42:57.000Z"
            },
            {
                "id": 2,
                "name": "Workshop 2",
                "description": "Go hacks",
                "metaValue": "",
                "createdAt": "2017-10-31T11:42:57.000Z",
                "updatedAt": "2017-10-31T11:42:57.000Z"
            },
            {
                "id": 2,
                "name": "Dinner",
                "description": "Go hacks",
                "metaValue": "",
                "createdAt": "2017-10-31T11:42:57.000Z",
                "updatedAt": "2017-10-31T11:42:57.000Z"
            },
            {
                "id": 2,
                "name": "Midnight Snacks",
                "description": "Go hacks",
                "metaValue": "",
                "createdAt": "2017-10-31T11:42:57.000Z",
                "updatedAt": "2017-10-31T11:42:57.000Z"
            },
            {
                "id": 2,
                "name": "Breakfast",
                "description": "Go hacks",
                "metaValue": "",
                "createdAt": "2017-10-31T11:42:57.000Z",
                "updatedAt": "2017-10-31T11:42:57.000Z"
            }*/],
            isLoading: true
        };
        // this.handleMeals = this.handleMeals.bind(this);
        // this.handleActivities = this.handleActivities.bind(this);
        // this.handleRegistration = this.handleRegistration.bind(this);

        this.renderItem = this.renderItem.bind(this)
        // this.handleItemPress = this.handleItemPress.bind(this)

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
            })
        }
    }

    // handleMeals() {
    //     this.props.navigator.push({
    //         title: 'Meals',
    //         component: MealPage,
    //         passProps: {myElement: 'text'}
    //     });
    // }

    // handleActivities() {
    //     this.props.navigator.push({
    //         title: 'Activities',
    //         component: ActivityPage,
    //         passProps: {myElement: 'text'}
    //     });
    // }

    // handleRegistration() {
    //     this.props.navigator.push({
    //         title: 'Registration',
    //         component: Scanner,
    //         passProps: {myElement: 'Register'}
    //     });
    // }

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
            >
                <View style={styles.row}>
                    <Text style={styles.item}>
                        {item.name}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        // return (<View style={styles.container}>
        //     <TouchableHighlight
        //       onPress={this.handleRegistration}
        //     >
        //         <View style={styles.row}>
        //             <Text style={styles.item}>
        //                 Registration
        //             </Text>
        //         </View>
        //     </TouchableHighlight>

        //     <Text style={styles.space}></Text>

        //     <TouchableHighlight
        //         onPress={this.handleMeals}
        //     >
        //         <View style={styles.row}>
        //             <Text style={styles.item}>
        //                 Meals
        //             </Text>
        //         </View>
        //     </TouchableHighlight>

        //     <Text style={styles.space}></Text>

        //     <TouchableHighlight
        //         onPress={this.handleActivities}
        //     >
        //         <View style={styles.row}>
        //             <Text style={styles.item}>
        //                 Activities
        //             </Text>
        //         </View>
        //     </TouchableHighlight>
        // </View>);

        return (
            <View style={{flex: 1}}>
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
