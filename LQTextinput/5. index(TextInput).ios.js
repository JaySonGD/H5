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
    TextInput
} from 'react-native';


var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');

/****************************** 常用组件之TextInput ******************************/

var  LQTextinput = React.createClass({

  render(){
    return(
        <View style = {styles.viewStyle}>

          <TextInput style = {styles.textStyle}
              //       value = '默认文字'
              //       placeholder = '占位文字'
              //       keyboardType = 'number-pad'
              //       multiline = {true}
              //       password = {true}
              //       placeholderTextColor = 'red'
              //       clearButtonMode = 'always'
              //       secureTextEntry = {true}
                     onChangeText = {(text)=>{

                     console.log(text)
                     }}

              ></TextInput>


        </View>
    );
  },

});

var styles = StyleSheet.create({

  viewStyle:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textStyle:{

    paddingLeft: 10,
    backgroundColor: 'orange',
    height: 35,
  }
});

AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
