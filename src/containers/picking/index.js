import React, {Fragment, Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  AsyncStorage
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

import SQLite from 'react-native-sqlite-2';
let db;
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props);

    db = SQLite.openDatabase('test.db', '1.0', '', 1);
    db.transaction(function (txn) {
      txn.executeSql('DROP TABLE IF EXISTS Tasks', []);
      txn.executeSql('CREATE TABLE IF NOT EXISTS Tasks(id INTEGER PRIMARY KEY NOT NULL, goodsName VARCHAR(30), goodsSkuNo VARCHAR(30), pickingShouldCount INT, pickingCount INT, lessCount INT, status INT)', []);
      {/*txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['nora']);
      txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya']);
      txn.executeSql('SELECT * FROM `users`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log('item:', res.rows.item(i));
        }
      });*/}
    });

    this.state = {
      isHasTask: true,
      isHeaderC: false,
      batchNo: 0,
      needMinutes: 0,
      skuNums: '0', // 商品数量
      goodsCount: 0, // 商品件数
      goodsList: [],
      isVisible: false
    }
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
        console.log(result)
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
        } else {
          this.setState({
            isHasTask: true,
            isHeaderC: false,
            batchNo: 0,
            needMinutes: 0
          })
        }
      }).catch((error) => {
        console.log(error)
      })
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
      goodsList={this.state.goodsList}/>
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
