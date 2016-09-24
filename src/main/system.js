import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import NavBar from '../myComponent/navigationBar';
let ScreenWidth = Dimensions.get('window').width;
let Screenheight = Dimensions.get('window').height;


export default class SystemView extends Component {
  render() {
    return (
      <View style={styles.background}>
        <NavBar name='我'/>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentContainerStyle           ={styles.scrollV}>

        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor: 'gainsboro'
  },
  scrollV: {
    backgroundColor:'#F0F0F0',
  }
});
