import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import NavBar from '../myComponent/navigationBar';
import Button from '../myComponent/button'
import SearchDetail from './search/detail';
let WIDTH = Dimensions.get('window').width;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  searchUser(){
    console.log(this.state.text);
    if (this.state.text !== '') {
      this.props.navigator.push({
        component:SearchDetail,
        params:{
          searchUrl:'http://api.kanzhihu.com/searchuser/'+this.state.text
        }
      })
    }else {

    }
  }
  searchAgree(){
    this.props.navigator.push({
      component:SearchDetail,
      params:{
        searchUrl:'http://api.kanzhihu.com/topuser/agree/1'
      }
    })
  }
  searchCommon(){
    this.props.navigator.push({
      component:SearchDetail,
      params:{
        searchUrl:'http://api.kanzhihu.com/topuser/follower/1',
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar name='搜索'/>
        <View style={styles.inputViewStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="请输入搜索条件!"
            onChangeText={(text) => this.setState({text})}
          />
          <TouchableOpacity onPress={this.searchUser.bind(this)}>
            <Text style={{fontSize:30, marginLeft:10}}>🔍</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.searchAgree.bind(this)}>
          <Button buttonTitle='赞同排名前30'
                  style={styles.btnStyle}

          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.searchCommon.bind(this)}>
          <Button buttonTitle='关注排名前30'
                  style={styles.btnStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro'
  },
  inputViewStyle:{
    marginTop: 30,
    width: WIDTH,
    height: 32,
    flexDirection: 'row',
  },
  inputStyle: {
    marginLeft: 20,
    marginTop: 1,
    width: WIDTH-80,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  btnStyle :{
    marginLeft: 80,
    marginTop:30,
    width: WIDTH - 160,
    height: 40,
    backgroundColor: 'lightskyblue',
    borderRadius: 10
  }
});
