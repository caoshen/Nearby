/**
 * Header for page
 *
 * Created by cs on 17-6-10.
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  View,
  Image
} from 'react-native';

var Header = React.createClass({
  render: function () {
    return (
      <View style={style.flex}>
        <Text style={style.font}>
          <Text style={style.font_1}>網易</Text>
          <Text style={style.font_2}>新闻</Text>
          <Text>有态度</Text>
        </Text>
      </View>
    );
  }
});

var style = StyleSheet.create({
  flex: {
    marginTop: 25,
    height: 50,
    borderBottomWidth: 3/PixelRatio.get(),
    borderBottomColor: '#EF2036',
    alignItems: 'center'
  },
  font: {
    TextAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
  font_1: {
    color: '#CD1D1C'
  },
  font_2: {
    color: '#FFF',
    backgroundColor: '#CD1D1C'
  }
});

module.exports = Header;


