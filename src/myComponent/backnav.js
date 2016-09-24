import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;
import Button from './button';


export default class BackNavigationBar extends Component {
  render() {
    return (
        <View style={styles.topBar}>
          <TouchableOpacity onPress={this.props.click}>
            <Button style={{width:30,height:30,marginTop:27,marginLeft:27}}
                    imageSource={require('../images/returnbtn.png')}
            />
          </TouchableOpacity>
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
    flexDirection:'row'
  },
  topBarTitleView: {
    marginTop:20,
    height:44,
    width:200,
    marginLeft:ScreenWidth/2-150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarTitle: {
    fontSize:22,
    fontWeight:"600",
  },
});
