import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions
} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;

export default class TextInputView extends Component{
	// constructor(props) {
 //    super(props);
 //    this.state = {text: ''};
 //  }
	render(){

    return(

          <View style={styles.formStyle} style={this.props.style}>
            <TextInput style={styles.inputStyle}
                       placeholder={this.props.placeholder}
                       placeholderTextColor={this.props.placeholderTextColor}
                       secureTextEntry={this.props.secureTextEntry}
                       defaultValue={this.props.defaultValue}
                       // onChangeText={(text) => this.setState({text})}
            />
          </View>
    );
  }
}
const styles = StyleSheet.create({
  formStyle:{
    height:40,
    width:ScreenWidth,
    justifyContent: 'center',
  },
  inputStyle: {
    width:ScreenWidth-40,
    height:35,
    // marginLeft:10,
    // marginRight:10,
    borderWidth:1,
    borderColor:'black',
    borderRadius:10,
    textAlign:'center',
  },
});
