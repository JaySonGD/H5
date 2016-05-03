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
    TabBarIOS
} from 'react-native';


var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');

var LQTextinput = React.createClass({

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
                        systemIcon = 'downloads'
                        onPress = { () =>{
                                this.setState({
                                    selectedItem: 'home'
                                });
                            }

                        }
                        selected = {this.state.selectedItem === 'home'}

                        >


                        <View style = {{flex:1,backgroundColor:'white',justifyContent: 'center',alignItems:'center' }}>
                                <Text >{this.state.selectedItem}</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title =  'home'
                        badge = '99'
                        systemIcon = 'downloads'

                        onPress = { () =>{
                                this.setState({
                                    selectedItem: 'discover'
                                });
                            }

                        }
                        selected = {this.state.selectedItem === 'discover'}


                        >


                        <View style = {{flex:1,backgroundColor:'white',justifyContent: 'center',alignItems:'center' }}>
                            <Text>{this.state.selectedItem}</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title =  'home'
                        badge = '99'
                        systemIcon = 'downloads'

                        onPress = { () =>{
                                this.setState({
                                    selectedItem: 'compose'
                                });
                            }

                        }
                        selected = {this.state.selectedItem === 'compose'}

                        >


                        <View style = {{flex:1,backgroundColor:'white',justifyContent: 'center',alignItems:'center' }}>
                            <Text>{this.state.selectedItem}</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title =  'home'
                        badge = '99'
                        systemIcon = 'downloads'
                        onPress = { () =>{
                                this.setState({
                                    selectedItem: 'message'
                                });
                            }

                        }
                        selected = {this.state.selectedItem === 'message'}

                        >


                        <View style = {{flex:1,backgroundColor:'white',justifyContent: 'center',alignItems:'center' }}>
                            <Text>{this.state.selectedItem}</Text>
                        </View>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title =  'home'
                        badge = '99'
                        systemIcon = 'downloads'

                        onPress = { () =>{
                                this.setState({
                                    selectedItem: 'profile'
                                });
                            }

                        }
                        selected = {this.state.selectedItem === 'profile'}

                        >


                        <View style = {{flex:1,backgroundColor:'white',justifyContent: 'center',alignItems:'center' }}>
                            <Text>{this.state.selectedItem}</Text>
                        </View>
                    </TabBarIOS.Item>



                </TabBarIOS>

            </View>

        );
    },
});

var styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor: 'red',
    },
});


AppRegistry.registerComponent('LQTextinput', () => LQTextinput);
