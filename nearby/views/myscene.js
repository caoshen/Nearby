/**
 * Created by cs on 17-7-11.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class MyScene extends Component {

  render() {
    return (
      <View>
        <Text>Hi! Current scene is {this.props.title}.</Text>
        <TouchableHighlight
          onPress={this.props.onForward}
        ><Text>点我进入下一场景</Text></TouchableHighlight>
        <TouchableHighlight
          onPress={this.props.onBackward}
        ><Text>点我返回上一场景</Text></TouchableHighlight>
      </View>
    );
  }
}