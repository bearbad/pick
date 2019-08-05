import React, {Fragment, Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { Button } from 'react-native-elements';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  render () {
    return (
      <Fragment>
        <StatusBar backgroundColor='black' barStyle="light-content" />
          <View style={styles.header}>
            <View style={styles.heaL}>
              <Text style={[styles.title, styles.titleL]}>首页</Text>
            </View>
            <View style={styles.heaC}>
              <View>
                <Text style={styles.titleC}>批次号：201906200</Text>
              </View>
              <View>
                <Text style={styles.titleC}>剩余时间：30分钟</Text>
              </View>
            </View>
            <View style={styles.heaR}>
              <Text style={[styles.title, styles.titleR]}>暂停</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.submit}>
              <Button title='获取任务'
                containerStyle={styles.btnCon}
                buttonStyle={styles.btnLogin}
                titleStyle={styles.btnTitle}>
              </Button>
            </View>
          </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:300
  },

  // 获取任务
  submit: {
  },

  btnCon: {
  },

  btnLogin: {
  },

  btnTitle: {
  },

  // header
  header: {
    height: 72,
    backgroundColor: Colors.black,
    flexDirection:'row',
    justifyContent: 'flex-start'
  },
  title: {
    color: Colors.white,
    lineHeight: 72
  },
  heaL: {
    width: 70,
    // backgroundColor: 'red'
  },
  titleL: {
    fontSize: 22,
    marginLeft: 20
  },
  heaC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange'
  },
  titleC: {
    color: 'white',
    fontSize: 18
    // textAlign: 'center'
  },
  heaR: {
    width: 70,
    // backgroundColor: 'green'
  },
  titleR: {
    fontSize: 22,
    marginRight: 20
  }
})
