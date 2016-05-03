/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var  Dimensions = require('Dimensions');
var {width,height,scale} = Dimensions.get('window');

/****************************** FlexBox布局 ******************************/
class LQTextinput1 extends Component {
  render() {
    return (
      <View style={styles1.container}>


        <View style={{backgroundColor:'white',width : 100,height: 20 ,flex : 1}}></View>
        <View style={{backgroundColor:'yellow',width : 100,height: 50 ,flex : 1}}></View>
        <View style={{backgroundColor:'purple',width : 50,height: 100,flex : 1}}></View>
        <View style={{backgroundColor:'yellow',width : 100,height: 50 ,flex : 1}}></View>
        <View style={{backgroundColor:'white',width : 100,height: 20,flex : 1}}></View>

        <Text>

          高度:{width+'\n'}
          宽度:{height+'\n'}

        </Text>


      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    //flexDirection: 'row', // 左右排列 (默认column 上下)
//flex-start(默认值)：伸缩项目向一行的起始位置靠齐。
//flex-end：伸缩项目向一行的结束位置靠齐。
//center：伸缩项目向一行的中间位置靠齐。

//justifyContent: 'center',//主

//flexWrap: 'wrap', // 多行  nowrap(默认值)单行：

//flex-start：伸缩项目在侧轴起点边的外边距紧靠住该行在侧轴起始的边。
//flex-end：伸缩项目在侧轴终点边的外边距靠住该行在侧轴终点的边 。
//center：伸缩项目的外边距盒在该行的侧轴上居中放置。
//alignItems: 'center',//测

  },


});



AppRegistry.registerComponent('LQTextinput', () => LQTextinput1);
