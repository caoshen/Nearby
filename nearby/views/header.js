/**
 * Header
 *
 * Created by cs on 17-8-20.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

var Header = React.createClass({
  getDefaultProps: function () {
    return {
      title: '标题',
      showBack: true
    };
  },

  returnBack: function () {
    this.props.backFun ? this.props.backFun.call(null)
      : this.props.nav.pop();
  },

  render: function () {
    return (
      <View style={styles.header}>
        <TouchableOpacity hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                          style={styles.width50}
                          onPress={this.props.showBack ? this.returnBack : undefined}>
          {this.props.showBack ? <Text style={styles.backIcon}>返回</Text>
            : null}
        </TouchableOpacity>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#4A9DF8',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center'
  },
  width50: {
    width: 50
  },
  backIcon: {
    marginLeft: 10,
    color: '#FFFFFF'
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

module.exports = Header;