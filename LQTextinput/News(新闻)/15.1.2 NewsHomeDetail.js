/**
 * Created by czljcb on 16/4/5.
 */

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
    TabBarIOS,
    WebView
} from 'react-native';

var Detail = React.createClass({

    getInitialState(){
      return{
          html: 'www',
      }
    },

    render(){
        return(
            <WebView
                startInLoadingState = {true}
                source =  {{html: this.state.html, baseUrl: ''}}
                automaticallyAdjustContentInsets = {true}
                >

            </WebView>
        );
    },

    componentDidMount(){

        var API = 'http://c.m.163.com/nc/article/BJLPM82O051482D9/full.html';//'http://c.m.163.com/nc/article/'+ this.props.rowData.docid+'/full.html';
        fetch(API)
        .then((response) => response.json())
        .then((responseData) => {

                var bodyHtml = responseData['BJLPM82O051482D9'];//[this.props.rowData.docid];
                var body = bodyHtml.body;
                var images = bodyHtml.img;
                var title = bodyHtml.title;

                var titleHtml = '<Text' +
                    'style = {{color = "red"}}' +

                    '>'+title+'</Text>';

                body = titleHtml+body ;
                //alert(titleHtml)
                for(var i=0; i<images.length; i++){
                    // 取出src
                    var imgSrc = images[i].src;
                    var imgHtml = '<img src="'+ imgSrc +'" style="width: 95%; height:auto;">';
                    //alert(imgHtml);
                    var ref = images[i].ref;
                    body = body.replace(ref, imgHtml)
                }
                // 更新状态
                this.setState({
                    html: body
                });
            })
    },
});


var styles = StyleSheet.create({

    viewStyle:{
        flex: 1,
        backgroundColor: 'orange',
    },
});


module.exports = Detail;