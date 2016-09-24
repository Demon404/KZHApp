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
import NavBar from '../myComponent/navigationBar';
import Detail from './detail/detail';
let WIDTH = Dimensions.get('window').width;
var GET_URL = 'http://api.kanzhihu.com/getposts';


export default class HomePage extends Component {
  //初始化的时候拉数据
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(GET_URL)
        //ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
                  dataSource : this.state.dataSource.cloneWithRows(responseData.posts),
              });
        })
        .done();
  }

  constructor(props) {
      super(props);
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
                <Image style={{margin:10,width:WIDTH-40, resizeMode:'contain',height:(WIDTH-40)/2}}
                       source={{uri: data.pic}}
                />
                <Text style={styles.title}>{data.excerpt}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
  rowPressed(rowdata){
    this.props.navigator.push({
      component:Detail,
      params:{nextdata: rowdata},
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <NavBar name='看知乎'/>
        <ListView
            initiaListSize={2}
            pageSize={2}
            dataSource={this.state.dataSource}
            renderRow={this.cellRow.bind(this)}
            style={styles.listView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        textAlign: 'left',
        margin:10,
        marginTop:0,
    },
    cellStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      margin:10,
      backgroundColor:'white',
      borderRadius:10,
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    listView: {
        backgroundColor: 'gainsboro',
        flex:1,
    },
});
