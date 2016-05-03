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

var wineDatas = require('./wine.json');

/****************************** 常用组件之TextInput ******************************/

var LQTextinput = React.createClass({


    getInitialState(){

        console.log(wineDatas);

        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        return{
            dataSource: ds.cloneWithRows(
                wineDatas
                //[
                //    '第一回1',
                //    '第一回2',
                //    '第一回3',
                //    '第一回4',
                //    '第一回5',
                //    '第一回6',
                //    '第一回7',
                //]
            )
        }
    },

    render(){


      return(

      <ListView
            style = {styles.listViewStyle}
            dataSource = {this.state.dataSource}

            renderRow = {this.renderRow}
            //
            //renderRow = {
            //
            //                (rowData) =>
            //                     <View style = {styles.cellStyle}>
            //                            <Image style = {styles.cellImageStyle} source = {{uri: rowData.image}}></Image>
            //
            //                            <View style = {styles.cellContentStyle}>
            //                                  <Text style = {styles.contentTitleStyle}>{rowData.name}</Text>
            //                                  <Text style = {styles.contentSubTitleStyle}>{'$:' + rowData.money}</Text>
            //                            </View>
            //                     </View>
            //
            //            }
          >


      </ListView>
    );
  },

    renderRow(rowData ,sectionID,rowID){
       return(

           <TouchableOpacity activeOpacity={0.5}>

           <View style = {styles.cellStyle}>
                   <Image style = {styles.cellImageStyle} source = {{uri: rowData.image}}></Image>

                   <View style = {styles.cellContentStyle}>
                       <Text style = {styles.contentTitleStyle}>{rowData.name}</Text>
                       <Text style = {styles.contentSubTitleStyle}>{'$:' + rowData.money}</Text>
                   </View>
               </View>
               </TouchableOpacity>

               ) ;
    },


});

var styles = StyleSheet.create({

    listViewStyle:{
    flex: 1,
    backgroundColor: 'red',
    },

    cellStyle:{
        flexDirection: 'row',
       height: 80,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    cellImageStyle:{
        marginTop: 10,

        width: 60,
        height: 60,
        marginLeft: 10,
    },
    cellContentStyle:{
        marginLeft: 10,
        marginTop: 10,

    },
    contentTitleStyle:{
        width: width - 90,
        fontSize: 16,
        marginBottom: 10,
        color: 'white',
    },

    contentSubTitleStyle:{
        color: 'orange',
        fontSize: 14,

    },



});


AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
