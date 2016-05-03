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

var shareDatas = require('./shareData.json').data;

/****************************** 常用组件之TextInput ******************************/

var LQTextinput = React.createClass({


    getInitialState(){


        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        return{
            dataSource: ds.cloneWithRows(shareDatas)
        }
    },

    render(){


      return(

      <ListView
          contentContainerStyle = {styles.listViewStyle}
            //horizontal={true}

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
                    <Image style = {styles.cellImageStyle} source = {{uri: rowData.icon}}></Image>

                    <Text style = {styles.contentTitleStyle}>{rowData.title}</Text>
               </View>
               </TouchableOpacity>

               ) ;
    },


});

var styles = StyleSheet.create({

    listViewStyle:{
    //flex: 1,
    //backgroundColor: 'red',
    flexDirection: 'row',
        flexWrap: 'wrap',

        },

    cellStyle:{
        flexDirection: 'row',
        height: ( width - 4 * 10 )/3 ,
        width:( width - 4 * 10 )/3,
        //borderBottomColor: 'black',
        //borderBottomWidth: 1,
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 50,
        //backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cellImageStyle:{

        width: 80,
        height: 80,
    },

    contentTitleStyle:{
        //width: ( width - 4 * 10 )/3,
        fontSize: 16,
        marginBottom: 10,
        color: 'orange',
        //backgroundColor:'orange',


    },




});


AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
