// @flow

import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
    Image,
    View,
    ListView,
    List,
    FlatList
} from 'react-native';

import styles from '../styles/activityView';

export default class ActivityView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <View style = {styles.container}>
                <FlatList
                    data={[
                    {key: 'Registration'},
                    {key: 'Meal'},
                    {key: 'Activity'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <View style = {styles.separator}/>
            </View>
        );
    }
}
