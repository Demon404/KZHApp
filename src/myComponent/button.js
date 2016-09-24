/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class DemonButton extends Component {
 
  render() {
    return (
      <View style={this.props.style}>
          <Image source={this.props.imageSource} style={styles.imageType}>
            <Text style={{backgroundColor:'transparent'}} 
                  style={this.props.textStyle}>
                  {this.props.buttonTitle}
            </Text>
          </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  imageType:{
    flex:1,
    width:DemonButton.width,
    height:DemonButton.height,
    justifyContent: 'center', 
    alignItems: 'center'
  },
});