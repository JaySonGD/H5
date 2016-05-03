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

var Login = require('./6.1 login.js');

/****************************** 常用组件之TextInput ******************************/

var  LQTextinput = React.createClass({

  render(){

    return(
      <Login> </Login>
    );
  },

});


AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
