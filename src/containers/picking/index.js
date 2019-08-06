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
      isVisible: true
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
          {/*
            <View style={styles.submit}>
              <Button title='获取任务'
                containerStyle={styles.btnCon}
                buttonStyle={styles.btnLogin}
                titleStyle={styles.btnTitle}>
              </Button>
            </View>
            */}
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
                <Text style={[styles.conCenHeaderText, styles.textCount]}>商品数量：9</Text>
                <Text style={[styles.conCenHeaderText, styles.textJian]}>商品件数：24</Text>
              </View>
              <View style={styles.conCenTh}>
                <Text style={styles.conCenThText}>序号</Text>
                <Text style={styles.conCenThText}>商品名称</Text>
                <Text style={styles.conCenThText}>商品条码</Text>
                <Text style={styles.conCenThText}>应拣/已拣/缺货</Text>
                <Text style={styles.conCenThText}>状态</Text>
              </View>
              <ScrollView>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
                <View style={styles.conCenTh}>
                  <Text style={styles.conCenThText}>1</Text>
                  <Text style={styles.conCenThText}>三元酸奶200g原味</Text>
                  <Text style={styles.conCenThText}>6943322442224</Text>
                  <Text style={styles.conCenThText}>5/5/0</Text>
                  <Text style={styles.conCenThText}>拣货中</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.conBot}>
              <Button title='提交打包' buttonStyle={styles.conBotBtn}
                titleStyle={styles.btnTitle}>
              </Button>
            </View>
          </View>
          {/*
            <Overlay
              isVisible={this.state.isVisible}
              overlayStyle={styles.overlay}>
              <View style={styles.overlayTitleView}>
                <Text style={styles.overlayTitle}>请确认</Text>
              </View>
              <View style={styles.overlayContentView}>
                <Text style={styles.overlayContent}>当前拣货任务未完成，确认是否退出？</Text>
              </View>
              <View style={styles.overlayBtn}>
               <View style={styles.overlayConfirmView}>
                 <Button title='确认'
                   buttonStyle={styles.overlayConfirmBtn}
                   titleStyle={styles.overlayConfirmTitle}>
                 </Button>
               </View>
               <View style={styles.overlayCancelView}>
                 <Button title='取消'
                   buttonStyle={styles.overlayCancelBtn}
                   titleStyle={styles.overlayCancelTitle}>
                 </Button>
               </View>
              </View>
            </Overlay>
            */}
          <Overlay
            isVisible={this.state.isVisible}
            overlayStyle={styles.overlay1}>
            <View style={styles.overlayTitleView}>
              <Text style={styles.overlayTitle}>请确认</Text>
            </View>
            <View style={styles.overlayContentView}>
               <View style={styles.overlayContentTd}>
                <View style={styles.overlayContentTdLeftView}>
                  <Text style={styles.overlayContentTdLeftLabel}>
                    商品名称：
                  </Text>
                </View>
                <View style={styles.overlayContentTdRightView}>
                  <Text style={styles.overlayContentTdRightLabel}>
                    三元酸奶200g原味
                  </Text>
                </View>
               </View>
            </View>
            <View style={styles.overlayContentView}>
               <View style={styles.overlayContentTd}>
                <View style={styles.overlayContentTdLeftView}>
                  <Text style={styles.overlayContentTdLeftLabel}>
                    商品条码：
                  </Text>
                </View>
                <View style={styles.overlayContentTdRightView}>
                  <Text style={styles.overlayContentTdRightLabel}>
                    069433224422
                  </Text>
                </View>
               </View>
            </View>
            <View style={styles.overlayContentView}>
               <View style={styles.overlayContentTd}>
                <View style={styles.overlayContentTdLeftView}>
                  <Text style={styles.overlayContentTdLeftLabel}>
                    应拣数量：
                  </Text>
                </View>
                <View style={styles.overlayContentTdRightView}>
                  <Text style={styles.overlayContentTdRightLabel}>
                    5
                  </Text>
                </View>
               </View>
            </View>
            <View style={styles.overlayContentView}>
               <View style={styles.overlayContentTd}>
                <View style={styles.overlayContentTdLeftView}>
                  <Text style={styles.overlayContentTdLeftLabel}>
                    已拣数量：
                  </Text>
                </View>
                <View style={[styles.overlayContentTdRightView, styles.overlayContentTdRightInput]}>
                  <TextInput />
                  {/*<Text style={styles.overlayContentTdRightLabel}>
                    5
                  </Text>*/}
                </View>
               </View>
            </View>
            <View style={styles.overlayContentView}>
               <View style={styles.overlayContentTd}>
                <View style={styles.overlayContentTdLeftView}>
                  <Text style={styles.overlayContentTdLeftLabel}>
                    缺货数量：
                  </Text>
                </View>
                <View style={[styles.overlayContentTdRightView, styles.overlayContentTdRightInput]}>
                  <TextInput />
                </View>
               </View>
            </View>
            <View style={styles.overlayBtn}>
             <View style={styles.overlayConfirmView}>
               <Button title='确认'
                 buttonStyle={styles.overlayConfirmBtn}
                 titleStyle={styles.overlayConfirmTitle}>
               </Button>
             </View>
             <View style={styles.overlayCancelView}>
               <Button title='取消'
                 buttonStyle={styles.overlayCancelBtn}
                 titleStyle={styles.overlayCancelTitle}>
               </Button>
             </View>
            </View>
          </Overlay>
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
  // 获取任务
  submit: {
    width: 440,
    marginTop: 200
  },

  btnCon: {
  },
  conBotBtn: {
    height: 56,
    backgroundColor: '#1398FF',
    borderRadius: 4,
    width: 440,
    marginTop: 22
  },
  btnLogin: {
    height: 56,
    backgroundColor: '#1398FF',
    borderRadius: 4
  },

  btnTitle: {
    fontSize: 22,
    color: '#FFFFFF'
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
