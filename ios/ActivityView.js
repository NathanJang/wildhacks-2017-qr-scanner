'use strict';

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

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  item: {
  padding: 10,
  fontSize: 18,
  height: 44
  },
  container: {
   flex: 1,
   paddingTop: 22
  }
});

class ActivityView extends Component {
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

module.exports = ActivityView;
