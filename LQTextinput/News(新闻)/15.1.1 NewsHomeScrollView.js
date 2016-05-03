/**
 * Created by czljcb on 16/4/4.
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';


var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');

//var imageDatas = require('./ImageData.json').data;

var TimerMixin = require('react-timer-mixin');

/****************************** 常用组件之TextInput ******************************/

var LQTextinput = React.createClass({

    mixins: [TimerMixin],

    getDefaultProps(){
        return{
            timeCount: 1000,
            imageData: [],
        };
    },



    getInitialState(){
        if(!this.props.imageData.length) return;

        return{
            currentPage: 0,
            //imageData: []

        };
    },

    render(){
        if(!this.props.imageData.length) return;
        return(

            <View style = {styles.viewStyle}>
                <ScrollView
                    style = {styles.scrollViewStyle}

                    ref='scrollView'

                    horizontal={true}
                    //showsHorizontalScrollIndicator={false}
                    //alwaysBounceHorizontal ={false}
                    pagingEnabled={true}
                    scrollEnabled={true}
                    onMomentumScrollEnd={this.onMomentumScrollEnd}

                    onScrollEndDrag={this.onScrollEndDrag}
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    >

                    {this.renderScrollViewItem()}

                </ScrollView>

                <View style = {styles.pageStyle}>
                    {this.renderPageIndicator()}
                </View>

            </View>
        );
    },

    componentDidMount(){
        this.startTime();
    },
    startTime(){
        var scrollView = this.refs.scrollView;

        this.timer = this.setInterval(function() {
            var tempCurrentPage;
            if ((this.state.currentPage  ) == this.props.imageData.length - 1) {
                tempCurrentPage = 0;
            } else {
                tempCurrentPage = this.state.currentPage + 1;
            }
            var currentX = tempCurrentPage * width;
            scrollView.scrollResponderScrollTo({x:currentX,y:0,animated:true});

            this.setState({

                currentPage: tempCurrentPage,
            });
        },this.props.timeCount);
    },

    stopTime(){
        this.clearInterval(this.timer);
    },

    onMomentumScrollEnd(e){
        var offSetX = e.nativeEvent.contentOffset.x;

        this.setState({
            currentPage: Math.floor(offSetX / width)
        });

    },
    onScrollEndDrag(){
        this.startTime();
    },
    onScrollBeginDrag(){
        this.stopTime();
    },


    renderScrollViewItem(){

        var items = [];

        for (var i = 0; i< this.props.imageData.length;i++) {
            items.push(

                <Image
                    key = {i}
                    style = {styles.imageStyle}
                    source = { {uri: this.props.imageData[i].imgsrc} }
                    >

                </Image>
            );
        }
        return items;
    },

    renderPageIndicator(){

        var pages = [];
        var style;
        for(var  i =0 ; i < this.props.imageData.length ; i ++){

            style = (i==this.state.currentPage)? {color:'red'} : {color: 'blue'};

            pages.push(
                <Text key = {i} style = {[styles.textStyle,style]}>&bull;</Text>
            );
        }
        return pages;
    },

});

var styles = StyleSheet.create({

    viewStyle:{
        //flex: 1,
        backgroundColor: 'red',
    },
    scrollViewStyle:{
        //marginTop: 100,
    },
    imageStyle:{
        width: 375 ,
        height: 200,
    },
    pageStyle:{
        backgroundColor: 'rgba(180,180,180,0.6)',
        height: 30,
        width: width,
        flexDirection: 'row',
        position: 'absolute',
        bottom:0,
        alignItems: 'center',
    },
    textStyle:{
        fontSize: 40,
        marginLeft: 5,
        color: 'red',
    },


});


module.exports = LQTextinput;