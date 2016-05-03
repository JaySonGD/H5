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
} from 'react-native';



var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');


/****************************** 常用组件之imgae ******************************/
var LQTextinput = React.createClass({

  render(){

    return(
      <View style = {styles.container}>

        { /* 从项目中加载 */}
              <Image style = {styles.imageStyle} source = {require('./danjianbao.png')}></Image>
        { /* 从app中加载 */}

        <Image style = {styles.imageStyle} source = {require('image!icon_02')}></Image>

        <Image style = {styles.imageStyle} source ={{uri:'icon_01'}}></Image>

        { /* 从networking中加载 */}

        <Image style = {styles.imageStyle} source ={{uri:'https://www.baidu.com/img/baidu_jgylogo3.gif'}}></Image>

      </View>
    );
  }

});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle:{
    width: 150,
    height:160,
    resizeMode: Image.resizeMode.stretch,
  }

});

AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
