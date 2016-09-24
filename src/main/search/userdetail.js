import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import NavBar from '../../myComponent/backnav';
let WIDTH = Dimensions.get('window').width;
var URL = 'http://api.kanzhihu.com/userdetail2/'

export default class UserDetail extends Component {
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(URL+this.props.userhash)
        //ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
                  userdata : responseData,
              });
        })
        .done();
  }
  //

  constructor(props){
    super(props);
    this.state = {
      userdata:'',
    };
  }
  _back(){
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar name='详细页' click={this._back.bind(this)}/>
        <Text>{this.state.userdata.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
