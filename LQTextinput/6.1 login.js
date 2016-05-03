/**
 * Created by czljcb on 16/4/2.
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


var login = React.createClass({

    render(){
        return(

            <View style = {styles.loginStyle}>

                <Image style = {styles.iconStyle} source ={{uri:'icon'}}></Image>
                <TextInput style = {styles.textStyle}
                           clearButtonMode = 'always'
                           placeholder = '请输入账号'
                    ></TextInput>
                <TextInput style = {styles.textStyle}
                           clearButtonMode = 'always'
                           secureTextEntry = {true}
                           placeholder = '请输入密码'

                    ></TextInput>

                <View style = {styles.buttonStyle}>
                    <Text style = {styles.buttonTitleStyle}>登  录</Text>

                </View>

                <View style = {styles.registerStyle}>
                    <Text style = {styles.registerTitleStyle}>无法登陆</Text>
                    <Text style = {styles.registerTitleStyle}>新用户</Text>


                </View>

                <View style = {styles.thirdLoninStyle}>

                    <Text style = {styles.loginTextStyle}>其他方式登陆:</Text>
                    <Image style = {styles.logoStyle} source = {{uri: 'iconqq'}}></Image>
                    <Image style = {styles.logoStyle} source = {{uri: 'iconweichat'}}></Image>
                    <Image style = {styles.logoStyle} source = {{uri: 'iconsina'}}></Image>

                </View>

            </View>

        );
    },

});

var  styles = StyleSheet.create({

    loginStyle:{

        flex: 1,
        backgroundColor: '#dddddd',
        //justifyContent: 'center',
        alignItems: 'center',
    },

    iconStyle:{
        marginTop: 100,
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderRadius: 40,

        marginBottom: 50,
    },

    textStyle:{
        paddingLeft: 10,
        backgroundColor: 'white',
        marginTop: 1,
        height: 44,
        width: width,
        textAlign: 'center',
    },

    buttonStyle:{
        marginTop: 25,
        width: width*0.95,
        height: 44,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    buttonTitleStyle:{
        color: 'white',
        fontSize: 20,
    },

    registerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:width,
        padding: width*0.05,
    },

    registerTitleStyle:{
       color: 'orange',
    },

    thirdLoninStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        left: 10,
    },

    loginTextStyle:{
        fontSize: 20,
        color: 'orange',
    },

    logoStyle:{
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 25,
    },


});

module.exports = login;