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
        <View style={styles.heaC}>
          <View>
            <Text style={styles.titleC}>批次号：{this.props.batchNo}</Text>
          </View>
          <View>
            <Text style={styles.titleC}>剩余时间：{this.props.needMinutes}分钟</Text>
          </View>
        </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
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
  }
})
