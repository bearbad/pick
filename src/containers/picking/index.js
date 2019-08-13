import React, {Fragment, Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  AsyncStorage,
  TouchableNativeFeedback,
  Alert,
  ToastAndroid
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

import TaskEntity from '../entity/task.js'

import DB from '../../db/sqlite.js'

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  componentDidMount () {
    this.timer = setInterval(() => {
        if (!this.state.isHasTask) return
        this._getTask()
        ToastAndroid.show('每隔 5 秒钟触发一次', ToastAndroid.SHORT);
      }, 5000);
  }

  componentWillUnmount () {
    this.timer && setInterval(this.timer);
  }

  constructor(props) {
    super(props);

    this.state = {
      isHasTask: true,
      isHeaderC: false,
      isGetTask: true,
      batchNo: 0,
      needMinutes: 0,
      skuNums: '0', // 商品数量
      goodsCount: 0, // 商品件数
      goodsList: [],
      taskArray: [],
      isVisible: false
    }

    DB.initDB()
    DB.dropTable('Tasks')
    DB.dropTable('Base')
    this._initDBCreate()


    /* it has task in tasks */
    DB.selectDataFromTable('Tasks', (is, ret) => {
      if (is) {
        if (ret.length !== 0) {
          this.setState({
            taskArray: ret,
            isGetTask: false,
            isHasTask: false,
            isHeaderC: true
          })
        }
      }
    })
  }

  /* db create */
  _initDBCreate () {
    DB.createTable('CREATE TABLE IF NOT EXISTS Tasks(id INTEGER PRIMARY KEY NOT NULL, goodsName VARCHAR(30), goodsSkuNo VARCHAR(30), pickingShouldCount INT, pickingCount INT, lessCount INT, status INT)')
    DB.createTable('CREATE TABLE IF NOT EXISTS Base(id INTEGER PRIMARY KEY NOT NULL, batchId INT, batchNo VARCHAR(30), goodsCount INT, needMinutes INT, pickingStartTime VARCHAR(30), skuNums INT)')
  }


  _getTask () {
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        empId: 1002,
        empNo: 10002,
        shopCode: 1009
      })
    }
    fetch('http://10.115.5.143:8080/picking/getPickingTask', options)
      .then((response) => {
        return response.json()
      }).then((result) => {
        let taskArray = []
        let {code, msg, data} = result
        if (code === 200) {
          this.setState({
            isHasTask: false,
            isHeaderC: true,
            batchNo: data.batchNo,
            needMinutes: data.needMinutes,
            skuNums: data.skuNums,
            goodsCount: data.goodsCount,
            goodsList: data.goodsList
          })
          if (this.state.goodsList.length === 0) {
            ToastAndroid.show('暂无任务', ToastAndroid.SHORT);
          } else {
            data.goodsList.forEach(item => {
              let model = new TaskEntity(
                item.goodsName,
                item.goodsSkuNo,
                item.pickingShouldCount,
                0,
                0,
                '未开始')
                taskArray.push({...model.model})
                DB.insertDataToTable('Tasks', model.model)
            })
          }
        } else {
          this.setState({
            isHasTask: true,
            isHeaderC: false,
            batchNo: 0,
            needMinutes: 0
          })
        }
        return taskArray
      }).then((arr) => {
        this.setState({
          taskArray: arr,
          isGetTask: false,
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  _toHome () {
    Alert.alert(
      '确定？',
      '还未完成当前捡货任务',
      [
        {text: '确定', onPress: () => {
          this.props.navigation.navigate('Home')
        }},
        {text: '取消', onPress: () => {}},
      ]
    )
  }

  _stop () {
    this.setState({
      isGetTask: !this.state.isGetTask
    })
    let text = !this.state.isGetTask ? '获取中' : '已暂停'
    Alert.alert(text)
  }

  render () {
    let headerCView = this.state.isHeaderC ?
    <HeaderC batchNo={this.state.batchNo}
      needMinutes={this.state.needMinutes}/> :
    <HeaderCNO />
    let content = this.state.isHasTask ?
    <GetTask getTask={() => {this._getTask()}}/> :
    <TaskList skuNums={this.state.skuNums}
      goodsCount={this.state.goodsCount}
      goodsList={this.state.taskArray}/>
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
            {headerCView}
            <TouchableNativeFeedback
              onPress={this._stop.bind(this)}>
              <View style={styles.heaR}>
                <Text style={[styles.title, styles.titleR]}>{this.state.isGetTask ? '获取中' : '已暂停'}</Text>
              </View>
            </TouchableNativeFeedback>
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
    width: 100,
    // backgroundColor: 'green'
  },
  titleR: {
    fontSize: 22,
    marginRight: 20
  }
})
