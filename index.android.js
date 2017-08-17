/**
 * Chapter 9 LBS
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import MyScene from './nearby/views/myscene';

var Nearby = require('./nearby/index');

class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'My initial Scene', index: 0}}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex
              })
            }}
            onBackward={() => {
             if (route.index > 0) {
               navigator.pop();
             }
            }}
            />
        }
      />
    );
  }
}

AppRegistry.registerComponent('helloReactNative', () => Nearby);