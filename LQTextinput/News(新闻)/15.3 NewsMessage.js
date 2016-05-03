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

var Message = React.createClass({

    render(){
        return(
            <View style = {styles.viewStyle}></View>
        );
    },
});


var styles = StyleSheet.create({

    viewStyle:{
        flex: 1,
        backgroundColor: 'orange',
    },
});


module.exports = Message;