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
var clos = 3;
var WHMargin = 10;
var imageHW = (width - (clos+1) * WHMargin)/clos;

var imageDatas = require('./BadgeData.json').data;

/****************************** 常用组件之imgae应用 ******************************/
var LQTextinput = React.createClass({

  render(){
    console.log(imageDatas);
    //debugger
    return(
      <View style = {styles.container}>

        {this.renderPlist()}

      </View>
    );
  },

  renderPlist(){

    var plists = [];

    for(var i = 0 ; i < imageDatas.length ; i++){
      plists.push(
      <View key = {i} style = {styles.contentStyle}>
        <Image  source = {{uri:imageDatas[i].icon }} style = {styles.imageStyle}></Image>
        <Text style = {styles.textStyle}>  {imageDatas[i].title } </Text>
      </View>
      )

    }
    return plists;
  }


});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },

  contentStyle:{
    backgroundColor:'#dddddd',
    marginLeft:WHMargin,
    marginBottom:WHMargin,
    marginTop: 50,
    height:imageHW + 50,

    alignItems: 'center',
    justifyContent: 'center',

  },

  imageStyle:{
    width: imageHW,
    height:imageHW,
    resizeMode: Image.resizeMode.stretch,

    marginBottom:20,
  },

  textStyle:{
    color: 'orange',
    fontSize: 15,
  }

});

AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
