import React, {Fragment, Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TouchableNativeFeedback
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');
var boxW = width / 2 - 0.5;
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  _settingPress () {
    this.props.navigation.navigate('SettingIndex')
  }

  _toOrderPick () {
    this.props.navigation.navigate('PickIndex')
  }

  render () {
    return (
      <Fragment>
        <StatusBar backgroundColor='black' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.title}>首页</Text>
          </View>
          <View style={styles.container}>
            <TouchableNativeFeedback
              onPress={this._toOrderPick.bind(this)}>
              <View style={styles.oneView}>
                <Image
                  source={require('../images/icon_order_pick.png')}
                  style={styles.img}/>
                <Text style={styles.text}>捡货</Text>
              </View>
            </TouchableNativeFeedback>
            <View style={styles.oneView}>
              <Image
                source={require('../images/icon_pack.png')}
                style={styles.img}/>
              <Text style={styles.text}>打包</Text>
            </View>
            <View style={styles.oneView}>
              <Image
                source={require('../images/icon_print_repeat.png')}
                style={styles.img}/>
              <Text style={styles.text}>重打印</Text>
            </View>
            <View style={styles.oneView}>
              <Image
                source={require('../images/icon_pick_print.png')}
                style={styles.img}/>
              <Text style={styles.text}>捡打一体</Text>
            </View>
            <TouchableNativeFeedback
              onPress={this._settingPress.bind(this)}>
              <View style={styles.oneView}>
                <Image
                  source={require('../images/icon_setting.png')}
                  style={styles.img}/>
                <Text style={styles.text}>系统设置</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.oneView}>
                <Image
                  source={require('../images/icon_setting.png')}
                  style={styles.img}/>
                <Text style={[styles.text, styles.daiding]}>待定</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#EDEDED',
  },
  oneView: {
    alignItems:'center',
    width: boxW,
    backgroundColor: 'white',
    marginBottom: 1
  },
  img: {
    marginTop: 24,
    marginBottom: 12
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
    color: '#262626'
  },
  daiding: {
    color: '#999999'
  },
  // header
  header: {
    height: 72,
    backgroundColor: Colors.black
  },
  title: {
    fontSize: 30,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 72
  }
})
