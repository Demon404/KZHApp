import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import NavBar from '../../myComponent/backnav';
import UserDetail from './userdetail';
let WIDTH = Dimensions.get('window').width;

export default class SearchDetail extends Component {
  componentDidMount(){
    this.fetchData();
  }
  isSearchUser(){
    if (this.props.searchUrl.match('searchuser') == 'searchuser') {
      return true;
    }else {
      return false;
    }
  }
  fetchData(){
    var urlPath = this.props.searchUrl;
    fetch(urlPath)
        //ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.error == '') {
            this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(this.isSearchUser()?responseData.users:responseData.topuser),
                });
          }else {

          }
        })
        .done();
  }

  constructor(props) {
      super(props);
      //state内部维护的一个状态，我们刚开始进来的为空，来加载空的view
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2,
          }),
      };
  }
  cellRow(data) {
      return (
        <TouchableOpacity onPress={()=>this.rowPressed(data)}>
          <View>
            <View style={styles.cellStyle}>
              <Image source={{uri:data.avatar}} style={styles.headerImg}/>
              <View style={styles.nameStyle}>
                <Text style={{marginLeft:5}}>{data.name}</Text>
                <Text style={{marginLeft:5,marginTop:10}}>{data.id}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
  rowPressed(rowdata){
    this.props.navigator.push({
      component:UserDetail,
      params:{userhash: rowdata.hash},
    })
  }
  _back(){
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar name='列表页' click={this._back.bind(this)}/>
        <ListView
            initiaListSize={1}
            onEndReachedThreshold={10}
            dataSource={this.state.dataSource}
            renderRow={this.cellRow.bind(this)}
            style={styles.listView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cellStyle: {
      alignItems: 'center',
      margin:10,
      backgroundColor:'white',
      borderRadius:10,
      flexDirection:'row',
    },
    nameStyle: {
      flexDirection:'column'
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    listView: {
        backgroundColor: 'gainsboro',
        flex:1,
    },
    headerImg: {
      margin:10,
      width:50,
      height:50,
      borderRadius:25,
    },
});
