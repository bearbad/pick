import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import {
  Button,
  Overlay
} from 'react-native-elements';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  _logout () {
    this.props.navigation.navigate('Root')
  }

  _toHome () {
    // this.props.navigation.navigate('Home')
  }

  render () {
    return (
      <Fragment>
        <StatusBar backgroundColor='black' barStyle="light-content" />
          <View style={styles.header}>
            <TouchableNativeFeedback
              onPress={this._toHome.bind(this)}>
              <View style={styles.heaL}>
                <Text style={[styles.title, styles.titleL]}>首页</Text>
              </View>
            </TouchableNativeFeedback>
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
              <Text>token:{this.props.userInfo.token}</Text>
              <View style={styles.conBot}>
                <Button
                  title='退出当前登陆'
                  buttonStyle={styles.conBotBtn}
                  titleStyle={styles.btnTitle}
                  onPress={this.props.setUserInfo}>
                </Button>
              </View>
          </View>
      </Fragment>
    )
  }
}

let USER_INFO_TODO = {
    type: "USER_INFO_TODO",
    data: {
        token: ""
    }
};
let OTHER_TODO = {
    type: "OTHER_TODO",
    data: ""
};
//获取redux里面的数据
let mapStateToProps = function (state) {
    return {
        userInfo: state.userInfo,
        other: state.other,
    }
}
//给对应的数据赋值
let mapDispatchToProps = function (dispatch) {
    return {
        setUserInfo: () => {
            USER_INFO_TODO.data.token = "123";
            return dispatch(USER_INFO_TODO)
        },
        setOther: () => {
            OTHER_TODO.data = "456";
            return dispatch(OTHER_TODO)
        }
    }
}
//redux和页面关联
export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
