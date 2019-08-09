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
export default class HeaderC extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Fragment>
          <View style={styles.conTop}>
            <View style={styles.conTopView}>
              <Text style={styles.conTopText}>打包箱号：</Text>
            </View>
            <TextInput placeholder="扫码输入" style={styles.conTopTextInput}/>
            <View style={styles.conTopBtnView}>
              <Button title='更换' buttonStyle={styles.conTopBtn}
                titleStyle={styles.conTopBtnTitle}>
              </Button>
            </View>
          </View>
          <View style={styles.conCen}>
            <View style={styles.conCenHeader}>
              <Text style={[styles.conCenHeaderText, styles.textCount]}>商品数量：{this.props.skuNums}</Text>
              <Text style={[styles.conCenHeaderText, styles.textJian]}>商品件数：{this.props.goodsCount}</Text>
            </View>
            <View style={styles.conCenTh}>
              <Text style={styles.conCenThText}>序号</Text>
              <Text style={styles.conCenThText}>商品名称</Text>
              <Text style={styles.conCenThText}>商品条码</Text>
              <Text style={styles.conCenThText}>应拣/已拣/缺货</Text>
              <Text style={styles.conCenThText}>状态</Text>
            </View>
            <ScrollView>
            {this.props.goodsList.map((item, index) => {
              return (
                <View style={styles.conCenTh} key={item.id}>
                  <Text style={styles.conCenThText}>{index+1}</Text>
                  <Text style={styles.conCenThText}>{item.goodsName}</Text>
                  <Text style={styles.conCenThText}>{item.goodsSkuNo}</Text>
                  <Text style={styles.conCenThText}>{item.pickingShouldCount}/{item.pickingCount}/{item.lessCount}</Text>
                  <Text style={styles.conCenThText}>{item.status}</Text>
                </View>
              )
            })}
            </ScrollView>
          </View>
          <View style={styles.conBot}>
            <Button title='提交打包' buttonStyle={styles.conBotBtn}
              titleStyle={styles.btnTitle}>
            </Button>
          </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  // 列表top
  conTop: {
    height: 68,
    marginBottom: 20,
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  conTopView: {
    height: 68,
    width: 120
  },
  conTopText: {
    lineHeight: 68,
    marginLeft: 20,
    fontSize: 18,
    color: '#999999',
    // backgroundColor: 'green'
  },
  conTopTextInput: {
    fontSize: 18,
    height: 68,
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    flex: 1
  },
  conTopBtnView: {
    position: 'absolute',
    top: 14,
    right: 20
  },
  conTopBtn: {
    height: 42,
    width: 88,
    backgroundColor: '#1398FF'
  },
  conTopBtnTitle: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  // 列表中间
  conCen: {
    flex: 1,
    // height: 500,
    // backgroundColor: 'orange',
    borderTopWidth: 1,
    borderTopColor: '#ededed',
    borderLeftWidth: 1,
    borderLeftColor: '#ededed',
    borderRightWidth: 1,
    borderRightColor: '#ededed',
    marginLeft: 8,
    marginRight: 8
  },
  // 列表bottom
  conBot: {
    height: 96,
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  conCenHeader: {
    height: 60,
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
  },
  conCenHeaderText: {
    fontSize: 24,
    color: '#262626'
  },
  textCount: {
    position: 'absolute',
    top: 15,
    left: 10
  },
  textJian: {
    position: 'absolute',
    top: 15,
    left: 180
  },
  conCenTh: {
    height: 40,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed'
  },
  conCenThText: {
    fontSize: 18,
    color: '#999999'
  },

  conBotBtn: {
    height: 56,
    backgroundColor: '#1398FF',
    borderRadius: 4,
    width: 440,
    marginTop: 22
  }
})
