/**
 * Chapter 9 LBS
 */
import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';

var Nearby = require('./nearby/index');

AppRegistry.registerComponent('helloReactNative', () => Nearby);