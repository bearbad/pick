import React, {Fragment, Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import {
  Button,
  Overlay
} from 'react-native-elements';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <Fragment>
        <StatusBar backgroundColor='black' barStyle="light-content" />
          <View style={styles.header}>
            <View style={styles.heaL}>
              <Text style={[styles.title, styles.titleL]}>首页</Text>
            </View>
            <View style={styles.heaC}>
              <Text style={[styles.title, styles.titleC]}>系统设置</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.conTd}>
              <View style={styles.conTdLabelView}>
                <Text style={styles.conTdLabel}>登陆用户：</Text>
              </View>
              <View style={styles.conTdInputView}>
                <TextInput style={styles.conTdInput}/>
              </View>
            </View>
            <View style={styles.conTd}>
              <View style={styles.conTdLabelView}>
                <Text style={styles.conTdLabel}>登陆账号：</Text>
              </View>
              <View style={styles.conTdInputView}>
                <TextInput style={styles.conTdInput}/>
              </View>
            </View>
            <View style={styles.conTd}>
              <View style={styles.conTdLabelView}>
                <Text style={styles.conTdLabel}>所属门店：</Text>
              </View>
              <View style={styles.conTdInputView}>
                <TextInput style={styles.conTdInput}/>
              </View>
            </View>
            <View style={styles.conBot}>
              <Button title='退出当前登陆' buttonStyle={styles.conBotBtn}
                titleStyle={styles.btnTitle}>
              </Button>
            </View>
          </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  conBot: {
    height: 96,
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  conBotBtn: {
    height: 56,
    backgroundColor: '#1398FF',
    borderRadius: 4,
    width: 440,
    marginTop: 22
  },
  btnTitle: {
    fontSize: 22,
    color: '#FFFFFF'
  },
  conTd: {
    height: 68,
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  conTdLabelView: {
    width: 110,
    justifyContent: 'center',
    // backgroundColor: 'green'
  },
  conTdLabel: {
    fontSize: 18,
    marginLeft: 20,
    color: '#999999'
  },
  conTdInputView: {
    flex: 1,
    // backgroundColor: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed'
  },
  conTdInput: {
    height: 68
  },
  // header
  header: {
    height: 72,
    backgroundColor: Colors.black,
    flexDirection:'row',
    justifyContent: 'flex-start'
  },

  heaL: {
    width: 70,
  },

  title: {
    color: Colors.white,
    lineHeight: 72
  },

  titleL: {
    fontSize: 22,
    marginLeft: 20
  },

  heaC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleC: {
    fontSize: 30,
    marginLeft: -70
  },

  container: {
    flex: 1
  },

})
