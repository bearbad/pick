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
import HeaderC from './headerC.js'
import HeaderCNO from './headerCNO.js'
import GetTask from './getTask.js'
import TaskList from './taskList.js'
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      isHasTask: true,
      isHeaderC: false,
      isVisible: false
    }
  }

  // _getTask () {
  //   let options = {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       empId: 1002,
  //       empNo: 10002,
  //       shopCode: 1009
  //     })
  //   }
  //   fetch('http://10.115.5.143:8080/picking/getPickingTask', options)
  //     .then((response) => {
  //       return response.json()
  //     }).then((result) => {
  //       console.log(result)
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  // }

  render () {
    let headerCView = this.state.isHeaderC ? <HeaderC /> : <HeaderCNO />
    let content = this.state.isHasTask ? <GetTask /> : <TaskList />
    return (
      <Fragment>
        <StatusBar backgroundColor='black' barStyle="light-content" />
          <View style={styles.header}>
            <View style={styles.heaL}>
              <Text style={[styles.title, styles.titleL]}>首页</Text>
            </View>
            {headerCView}
            <View style={styles.heaR}>
              <Text style={[styles.title, styles.titleR]}>暂停</Text>
            </View>
          </View>
          <View style={styles.container}>
            {content}
          </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  overlay1: {
    height: 520,
    width: 440
  },
  overlayContentTd: {
    height: 50,
    flexDirection: 'row'
  },
  overlayContentTdLeftView: {
    width: 130,
    // backgroundColor: 'red',
    justifyContent: 'center'
  },
  overlayContentTdLeftLabel: {
    fontSize: 22,
    color: '#999999'
  },
  overlayContentTdRightView: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'center'
  },
  overlayContentTdRightInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ededed'
  },
  overlayContentTdRightLabel: {
    fontSize: 22,
    color: '#262626'
  },
  overlayContentTdInput: {
    flex: 1,
    backgroundColor: 'green'
  },
  //
  overlayBtn: {
    flexDirection: 'row'
  },
  overlayConfirmView: {
    // backgroundColor: 'red',
    alignItems: 'center',
    flex: 1
  },
  overlayConfirmBtn: {
    height: 54,
    width: 189,
    backgroundColor: '#1398FF'
  },
  overlayConfirmTitle: {
    fontSize: 22,
    color: '#FFFFFF'
  },
  overlayCancelView: {
    // backgroundColor: '#999999',
    alignItems: 'center',
    flex: 1
  },
  overlayCancelBtn: {
    height: 54,
    width: 189,
    backgroundColor: 'white',
    borderWidth: 1
  },
  overlayCancelTitle: {
    fontSize: 22,
    color: '#999999'
  },
  overlay: {
    height: 220,
    width: 440
  },
  overlayTitleView: {
    // backgroundColor: 'red',
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center'
  },
  overlayContent: {
    fontSize: 22,
    color: '#262626'
  },
  overlayTitle: {
    fontSize: 30,
    color: '#262626'
  },
  overlayContentView: {
    marginBottom: 20,
    alignItems: 'center'
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

  heaR: {
    width: 70,
    // backgroundColor: 'green'
  },
  titleR: {
    fontSize: 22,
    marginRight: 20
  }
})
