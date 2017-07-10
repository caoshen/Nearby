/**
 * Created by cs on 17-7-6.
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  TextInput,
  Text,
  View,
  Dimensions
} from 'react-native';

var Util = {

  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText))
      });
  },

  getJson: function (url, callback) {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText))
      });
  },

  amapKey: '98cd4d3c1c2865132e73d851654c9c1b',

  searchURL: 'http://restapi.amap.com/v3/place/around?',

  detailURL: 'http://restapi.amap.com/v3/place/detail?'

}

module.exports = Util;
