/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');


/****************************** 常用组件之Text ******************************/
var LQTextinput2 = React.createClass({

  render(){
    return(
        <View style = {styles2.container}>
          <Text style = {styles2.textStyle}>月半小夜曲(live)		3:03	陈乐基	中国好声音第三季 海选第三期		0	1
          </Text>
        </View>
    );
  }

});

var styles2 = StyleSheet.create({
  container:{

    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },



  textStyle:{
    marginTop: 20,
    backgroundColor: 'orange',
    //height: 30,
    width: width,
    lineHeight: 20,



  },
});


AppRegistry.registerComponent('LQTextinput', () => LQTextinput2);
