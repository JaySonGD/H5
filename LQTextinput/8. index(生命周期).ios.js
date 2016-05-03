/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';


var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');


/****************************** 常用组件之TextInput ******************************/

var  LQTextinput = React.createClass({

  getDefaultProps(){
    return {
      name: 'Jason',
      age: 23,
    }
  },

  getInitialState(){
    return {

      title: '默认字体',
    }
  },

  render(){

    return(
      <View style = {styles.viewStyle}>
        <TouchableOpacity
            activeOpacity = {0.1}
            underlayColor = 'black'
            onPress = {()=>this.onClick('点击')}
            onPressIn = {()=>this.onClick('点击前')}
            onPressOut = {()=>this.onClick('点击后')}
            onLongPress = {()=>this.onClick('长按')}

            >
          <Text style = {styles.textStyle}>点击</Text>
        </TouchableOpacity>
        <Text >{'可变' +this.state.title}</Text>
        <Text >{'不可变' + this.props.name + this.props.age}</Text>

        <TextInput ref = 'myInput' style = {styles.inputStyle}></TextInput>
      </View>
    );
  },

  onClick(value){
    this.setState({
        title: value
    });

    this.refs.myInput.focus();

    console.log(this.refs.myInput)
  },

});

var styles = StyleSheet.create({

  viewStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle:{
    width: 100,
    height: 35,
    textAlign: 'center',
    lineHeight: 17.5,
    //backgroundColor: 'red',
  },

  inputStyle:{
    backgroundColor: 'orange',
    height: 35,
  },

});


AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
