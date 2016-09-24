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
  WebView
} from 'react-native';
import NavBar from '../../myComponent/backnav';
var questionUrl = 'https://www.zhihu.com/question/';
export default class Zhihu extends Component {
  _back(){
    this.props.navigator.pop();
  }


  render() {
    return (
      <View style={styles.container}>
        <NavBar name='知乎' click={this._back.bind(this)}/>
          <WebView
            source={{uri: questionUrl+this.props.nextdata.questionid+'/answer/'+this.props.nextdata.answerid}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
