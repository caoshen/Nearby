/**
 *
 * Created by cs on 17-7-11.
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

module.exports = React.createClass({
  render: function () {
    return (
      <Navigator
        initialRoute={{name: '', component: this.props.component, index: 0}}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromBottom;}}
        renderScene={(route, navigator) => {
          const Component = route.component;
          return (
            <View style={{flex: 1}}>
              <Component navigator={navigator} route={route} {...route.passProps}/>
            </View>
          );
        }}
      />
    );
  }
});