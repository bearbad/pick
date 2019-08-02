import React, {Fragment} from 'react';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TextInput
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { Button } from 'react-native-elements';

const Root = () => {
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
            <TextInput style={styles.logonInput}></TextInput>
          </View>
          <View>
            <Text style={styles.logonText}>密    码：</Text>
            <TextInput style={styles.logonInput}></TextInput>
          </View>
          <View style={styles.submit}>
            <View>
              <Button title='登录' buttonStyle={styles.btnLogin} titleStyle={styles.btnTitle}>
              </Button>
            </View>
          </View>
        </View>
    </Fragment>
  )
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
export default Root;
