
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
    NavigatorIOS
} from 'react-native';

var Home = require('./15.1 NewsHome.js');
var Discover = require('./15.2 NewsDiscover.js');
var Message = require('./15.3 NewsMessage.js');
var Profile = require('./15.4 NewsProfile.js');



var NewsTabBar = React.createClass({

    getInitialState(){
        return{
            selectedItem: 'home'
        };
    },
    render(){
      return(

        <View style = {styles.viewStyle}>


              <TabBarIOS

                  barTintColor = 'orange'
                  tintColor = 'red'
                  translucent = {true}
                  >

                  <TabBarIOS.Item
                      title =  'home'
                      badge = '99'
                      icon = {require('image!tabbar_home')}
                      selectedIcon = {require('image!tabbar_home_highlighted')}
                      onPress = { () =>{
                              this.setState({
                                  selectedItem: 'home'
                              });
                          }

                      }
                      selected = {this.state.selectedItem === 'home'}

                      >

                      <NavigatorIOS
                          style = {styles.navStyle}
                          initialRoute = {
                              {
                                title : 'Home',
                                component: Home,
                                tintColor: 'orange',
                                //barTintColor: '#dddddd',
                                //titleTextColor: 'white',
                                //translucent: 'true',
                                rightButtonIcon:require('image!navigationbar_pop'),
                                leftButtonIcon:require('image!navigationbar_pop')

                              }
                          }
                          >
                      </NavigatorIOS>


                  </TabBarIOS.Item>

                  <TabBarIOS.Item
                      title =  'discover'
                      badge = '99'
                      icon = {require('image!tabbar_discover')}
                      selectedIcon = {require('image!tabbar_discover_highlighted')}
                      onPress = { () =>{
                              this.setState({
                                  selectedItem: 'discover'
                              });
                          }

                      }
                      selected = {this.state.selectedItem === 'discover'}


                      >

                      <NavigatorIOS
                          style = {styles.navStyle}
                          initialRoute = {
                              {
                                title : 'Discover',
                                component: Discover,
                              }
                          }
                          >
                      </NavigatorIOS>

                  </TabBarIOS.Item>

                  <TabBarIOS.Item
                      title =  'message'
                      badge = '99'
                      icon = {require('image!tabbar_message_center')}
                      selectedIcon = {require('image!tabbar_message_center_highlighted')}
                      onPress = { () =>{
                              this.setState({
                                  selectedItem: 'message'
                              });
                          }

                      }
                      selected = {this.state.selectedItem === 'message'}

                      >

                      <NavigatorIOS
                          style = {styles.navStyle}
                          initialRoute = {
                              {
                                title : 'Message',
                                component: Message,
                              }
                          }
                          >
                      </NavigatorIOS>

                  </TabBarIOS.Item>


                  <TabBarIOS.Item
                      title =  'profile'
                      badge = '99'
                      icon = {require('image!tabbar_profile')}
                      selectedIcon = {require('image!tabbar_profile_highlighted')}
                      onPress = { () =>{
                              this.setState({
                                  selectedItem: 'profile'
                              });
                          }

                      }
                      selected = {this.state.selectedItem === 'profile'}

                      >

                      <NavigatorIOS
                          style = {styles.navStyle}
                          initialRoute = {
                              {
                                title : 'Profile',
                                component: Profile,
                              }
                          }
                          >
                      </NavigatorIOS>

                  </TabBarIOS.Item>



              </TabBarIOS>

            </View>

      );
    },
});


var styles = StyleSheet.create({
    viewStyle:{
        flex:1,

    },

    navStyle:{
      flex: 1,
    },
});



module.exports = NewsTabBar;