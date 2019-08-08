import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Alert
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

  render () {
    return (
      <Fragment>
        <View style={styles.submit}>
          <Button title='获取任务'
            // onPress={ () => { this.props._getTask }}
            containerStyle={styles.btnCon}
            buttonStyle={styles.btnLogin}
            titleStyle={styles.btnTitle}>
          </Button>
        </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  // 获取任务
  submit: {
    marginTop: 200,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center'
  },
  btnCon: {
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
})
