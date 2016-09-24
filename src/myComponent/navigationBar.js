import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;
import Button from './button';


export default class NavigationBar extends Component {
  render() {
    return (
        <View style={styles.topBar}>
          <View style={styles.topBarTitleView}>
            <Text style={styles.topBarTitle}>
              {this.props.name}
            </Text>
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  topBar: {
    height:64,
    backgroundColor:'lightskyblue',
    borderColor: 'gray',
    borderBottomWidth: 1 ,
  },
  topBarTitleView: {
    marginTop:20,
    height:44,
    width:200,
    marginLeft:ScreenWidth/2-100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  topBarTitle: {
    fontSize:22,
    fontWeight:"600",
  },
});
