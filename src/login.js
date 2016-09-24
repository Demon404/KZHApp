/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import TabbarView from './tabbar/tabbar';
import Button from './myComponent/button';
import FormText from './myComponent/formtextview';

let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

export default class LogInView extends Component {
  _onPage(){
    this.props.navigator.resetTo({
      component:TabbarView,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/background.jpg')} style={styles.backgroundStyle}>

          <Image source={require('./images/header.jpg')} style={styles.headerStyle}/>

          <FormText style={{marginTop:60}}
                    placeholder='账号'
                    placeholderTextColor='gray'
                    defaultValue='Demon404'
          />
          <FormText style={{marginTop:10}}
                    placeholder='请输入密码'
                    placeholderTextColor='orange'
                    defaultValue=''
          />
          <TouchableOpacity onPress={this._onPage.bind(this)}>
            <Button style={{marginTop:20,width:Width/2,height:40,backgroundColor:'blue',borderRadius:10}}
                    buttonTitle="登录"

            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPage.bind(this)}>
            <Button style={{marginTop:Height-80-Width/4-100-50-60-40,width:Width/3,height:25}}
                    buttonTitle='忘记密码?'
                    textStyle={{color:'blue'}}
            />
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    width: Width,
    height: Height,
    alignItems: 'center',
  },
  headerStyle: {
    width: Width/4,
    height: Width/4,
    borderRadius: Width/8,
    marginTop:80,
  },
});
