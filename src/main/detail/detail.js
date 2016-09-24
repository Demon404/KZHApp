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
import ZhiHu from './question';
let WIDTH = Dimensions.get('window').width;
var GET_URL = 'http://api.kanzhihu.com/getpostanswers/';

export default class Detail extends Component {
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    var date = this.props.nextdata.date.replace(/-/g,'');
    var urlstr = GET_URL+date+'/'+this.props.nextdata.name;
    console.log(urlstr);
    fetch(urlstr)
        //ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
                  dataSource : this.state.dataSource.cloneWithRows(responseData.answers),
              });
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
              <View style={{backgroundColor:'lightskyblue',borderTopLeftRadius:10, borderTopRightRadius:10}}>
                <Text style={styles.titleQ}>{data.title}</Text>
              </View>
              <View style={{flexDirection:'row' ,borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                <View style={{width:100,margin:0,flexDirection:'column',alignItems:'center'}}>
                  <Image source={{uri:data.avatar}} style={styles.headerImg}/>
                  <Text style={styles.author} numberOfLines={1}>{data.authorname}</Text>
                  <View style={{borderRadius:3,justifyContent:'center',alignItems:'center',backgroundColor:'lightskyblue',width:50,height:20 ,marginTop:15}}>
                    <Text style={{fontSize:14,backgroundColor:'transparent'}}>{data.vote}</Text>
                  </View>
                </View>
                <View style={{flexDirection:'column'}}>
                  <Text style={styles.titleA}>{data.summary}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
  rowPressed(rowdata){
    this.props.navigator.push({
      component:ZhiHu,
      params:{nextdata: rowdata},
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
    titleQ: {
        fontSize: 22,
        textAlign: 'left',
        margin: 10,
    },
    titleA: {
        fontSize: 16,
        textAlign: 'left',
        margin: 10,
        width: WIDTH-120,
        marginLeft:0,
    },
    cellStyle: {
      justifyContent: 'center',
      // alignItems: 'center',
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
    headerImg: {
      marginTop:10,
      width:50,
      height:50,
      borderRadius:25,
    },
    author: {
      marginTop:20,
      width:60,
      fontSize:17,
      fontWeight:'400',
      textAlign:'center',
    }
});
