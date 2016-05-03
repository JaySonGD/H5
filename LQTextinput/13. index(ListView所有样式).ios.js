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

var carDatas = require('./Car.json').data;

/****************************** 常用组件之TextInput ******************************/

var LQTextinput = React.createClass({


    getInitialState(){

        var getSectionData = (dataBlob,sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob,sectionID ,rowID) =>{
            return dataBlob[sectionID + ':' + rowID];
        };


        return{
            dataSource: new ListView.DataSource({
                   getRowData: getRowData,
                    getSectionData:  getSectionData,
                    rowHasChanged: (r1, r2) => r1 != r2 ,
            sectionHeaderHasChanged: (s1, s2) => s1 != s2,
                })
        }
    },

    render(){


      return(

      <ListView
          contentContainerStyle = {styles.listViewStyle}
            //horizontal={true}

            dataSource = {this.state.dataSource}

            renderRow = {this.renderRow}

            renderSectionHeader = {this.renderSectionHeader}
          //renderHeader={this.renderHeader}

          renderHeader = {() =>

                      <View style = {{width : 375, height : 100, backgroundColor : 'blue'}}>

                      </View>
          }
          renderFooter = { () =>

                      <View style = {{width : 375, height : 100, backgroundColor : 'orange'}}>

                      </View>
          }


          >


      </ListView>
    );
  },

    componentDidMount(){
        this.loadDataFormJson();
    },

    renderRow(rowData){
       return(

           <TouchableOpacity activeOpacity={0.5}>

           <View style = {styles.cellStyle}>
                    <Image style = {styles.cellImageStyle} source = {{uri: rowData.icon}}></Image>

                    <Text style = {styles.contentTitleStyle}>{rowData.name}</Text>
               </View>
               </TouchableOpacity>

               ) ;
    },
    renderSectionHeader(sectionData){
        return(

            <TouchableOpacity activeOpacity={0.5}>

                <View style = {styles.headerStyle}>
                    <Text style = {styles.contentHeaderStyle}>{sectionData}</Text>
                </View>
            </TouchableOpacity>

        ) ;
    },

    loadDataFormJson(){

        var boldData = {};
        var sectionID = [];
        var rowID = [];

        for (var i = 0; i < carDatas.length; i++) {
            boldData[i] = carDatas[i].title;
            sectionID.push(i);
            rowID[i] = [];

            for (var j = 0; j < carDatas[i].cars.length; j++) {
                rowID[i].push(j);
                boldData[i + ':' + j] = carDatas[i].cars[j];
            }
        }
        ;

        this.setState(
            {
                    dataSource:this.state.dataSource.cloneWithRowsAndSections(boldData, sectionID, rowID),

             }
        );


    },

});

var styles = StyleSheet.create({

    listViewStyle:{
    //flex: 1,
    //backgroundColor: 'red',
    //flexDirection: 'row',
    //flexWrap: 'wrap',

        },

    cellStyle:{
        flexDirection: 'row',
        height: 80 ,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft: 10,
        //backgroundColor: 'white',
        paddingBottom: 5,
        //justifyContent: 'center',
        alignItems: 'center',
    },

    cellImageStyle:{
        marginRight: 10,
        width: 60,
        height: 60,
    },

    contentTitleStyle:{
        fontSize: 16,
        color: 'orange',
        //backgroundColor:'orange',


    },
    headerStyle:{
        height: 35,
        width: width,
        backgroundColor: 'red',
        justifyContent: 'center',
        paddingLeft:10,
    },



});


AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
