/**
 * Created by czljcb on 16/4/4.
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

var NewsAPI = 'http://c.3g.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&passport=&devId=jQItgKVKba86%2BKmt07Nv4Z2nw6eGoR8INgtuDxJs76Tey4QlCXFCgXUNA4e2wIa7&size=20&version=5.6.0&spever=false&net=wifi&lat=&lon=&ts=1459859745&sign=AHdcB7L%2Fmw8RfmSqGQOsTrGJaaBhPkUgVg%2FxnehGlQN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=angela_news';
var NewsKey = 'T1348647853363';
var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');
var HeaderScrollView = require('./15.1.1 NewsHomeScrollView.js');
var newsDetail = require('./15.1.2 NewsHomeDetail.js');
var Home = React.createClass({

    getInitialState(){
        return {
            ads:[],
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})

        } ;
    },


    render(){
      return(
          <View style = {styles.viewStyle}>
            <ListView style = {styles.ListViewStyle}
                      dataSource = {this.state.dataSource}

                      renderRow = {this.renderRow}

                      renderHeader = {this.renderHeader}
                >
           </ListView>

          </View>
      );
    },

    componentDidMount(){
        this.loadData();
    },


    // listView的头部
    renderHeader(){
        // 处理没有焦点图的情况
        if(this.state.ads.length ==0) return;

        return(
            <HeaderScrollView
                imageData = {this.state.ads}
                />
        )
    },
    //
    //renderHeader(){
    //
    //    if(this.state.ads.length ==0) return;
    //    console.log(this.state.ads);
    //
    //    return(
    //        <HeaderScrollView
    //            style = {styles.headerStyle}
    //            imageDatas = {this.state.ads}
    //            //imageDatas = {this.state.ads}
    //
    //            />
    //        //</HeaderScrollView>
    //    );
    //},

    renderRow(rowData){
      return(

          <TouchableOpacity

              onPress = {()=>{this.seeDetailNews(rowData)}}
              >
            <View style = {styles.cellStyle}>
                <Image source = {{uri: rowData.imgsrc}} style = {styles.imageStyle}></Image>
                <View style = {styles.contentStyle}>


                    <Text style = {styles.titleStyle }>{rowData.title}</Text>
                    <Text style = {styles.subTitleStyle}>{rowData.digest}</Text>

                </View>
            </View>
          </TouchableOpacity>
      );
    },

    seeDetailNews(rowData){
        this.props.navigator.push({
            title:rowData.title,
            component:newsDetail,
            passProps:{rowData}
        });
    },

    loadData(){
        fetch(NewsAPI)
        .then((response) => response.json())
        .then((responseData => {
                    var allData = responseData[NewsKey];


                    if (allData.length == 0) return;
                    var ads = [];
                    var newsList = [];

                    for (var i = 0; i < allData.length; i++) {
                        var dataItem = allData[i];
                        if (dataItem.hasAD === 1) {
                            ads = dataItem.ads;
                        } else {
                            newsList.push(dataItem);
                        }

                    }

                    this.setState({
                        ads: ads,
                        dataSource: this.state.dataSource.cloneWithRows(newsList)

                    });
                }
            ))

    },

});






var styles = StyleSheet.create({

    viewStyle:{
        flex: 1,

        //backgroundColor: 'blue',
        //justifyContent: 'center',
        //alignItems: 'center',
    },

    cellStyle:{
        height: 120,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row',

    },

    imageStyle:{
        marginTop: 10,
        marginLeft: 10,
        width: 120,
        height:100,
    },

    contentStyle:{
    },

    titleStyle:{
        width: width - 150,
        marginLeft: 10,
        marginTop:10,
        //fontSize: 18,
        fontWeight: 'bold',
    },

    subTitleStyle:{
        width: width - 150,
    color:'gray',
        fontSize: 15,
      flexWrap: 'wrap',
        marginLeft: 10,
        marginTop:10,
    },

    headerStyle:{
      height: 100,
        backgroundColor: 'orange',
    },

});


module.exports = Home;