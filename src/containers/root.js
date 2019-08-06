import React, {Fragment, Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TextInput,
  Alert,
  ToastAndroid
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { Button } from 'react-native-elements';

import Toast, {DURATION} from 'react-native-easy-toast';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  loginPress () {
    if (this.state.username === '') {
      this.refs.toast.show('用户名错误');
      return
    }
    if (this.state.password === '') {
      this.refs.toast.show('密码错误');
      return
    }

    this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <Fragment>
        <StatusBar backgroundColor='black' barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.title}>国美（分享）</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.content}>PDA手持终端</Text>
          </View>
          <View style={styles.logon}>
            <View>
              <Text style={styles.logonText}>用户名：</Text>
              <TextInput
                placeholder="请输入用户名"
                style={styles.logonInput}
                onChangeText={(text) => {this.state.username = text}}>
              </TextInput>
            </View>
            <View>
              <Text style={styles.logonText}>密    码：</Text>
              <TextInput
                placeholder="请输入密码"
                style={styles.logonInput}
                onChangeText={(text) => {this.state.password = text}}>
              </TextInput>
            </View>
            <View style={styles.submit}>
              <View>
                <Button title='登录'
                  buttonStyle={styles.btnLogin}
                  titleStyle={styles.btnTitle}
                  onPress={this.loginPress.bind(this)}>
                </Button>
              </View>
            </View>
          </View>
          <Toast ref="toast"/>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  submit: {
    marginTop: 46
  },
  btnLogin: {
    height: 56,
    backgroundColor: '#1398FF'
  },
  btnTitle: {
    fontSize: 22,
    color: '#ffffff'
  },
  // btnContainer: {
  //   height: 56
  // },
  // logon
  logon: {
    height: 292,
    marginLeft: 19,
    marginRight: 19,
    marginTop: -58,
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: '#e1e1e1',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 3,
    paddingTop: 12,
    paddingRight: 36,
    paddingLeft: 36
  },
  logonText: {
    fontSize: 18,
    color: '#999999',
    position: 'absolute',
    top: 21
  },
  logonInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    height: 68,
    paddingLeft: 70
    // backgroundColor: 'red'
  },
  // body
  body: {
    height: 190,
    backgroundColor: '#1398ff'
  },
  content: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 58
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
