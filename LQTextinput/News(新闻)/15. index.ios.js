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
  TouchableOpacity,
    ScrollView,
    ListView,
    TabBarIOS
} from 'react-native';


var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');

var NewsTabBar = require('./News(新闻)/15.0 NewsTabBar.js');

var LQTextinput = React.createClass({



    render(){
        return(
            <NewsTabBar></NewsTabBar>
        );
    },
});



AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
