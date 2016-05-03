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
} from 'react-native';


var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');



/****************************** 常用组件之TextInput ******************************/

var LQTextinput = React.createClass({



    getInitialState(){

        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        return{
            dataSource: ds.cloneWithRows(
                [
                    '第一回1',
                    '第一回2',
                    '第一回3',
                    '第一回4',
                    '第一回5',
                    '第一回6',
                    '第一回7',
                ]
            )
        }
    },

    render(){


      return(

      <ListView
            style = {styles.listViewStyle}
            dataSource = {this.state.dataSource}
            renderRow = {

                            (rowData) =>
                                 <View style = {styles.cellStyle}>
                                        <Text>{rowData}</Text>
                                 </View>

                        }
          >


      </ListView>
    );
  },



});

var styles = StyleSheet.create({

    listViewStyle:{
    flex: 1,
    backgroundColor: 'red',
    },

    cellStyle:{
       height: 44,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
    },


});


AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
