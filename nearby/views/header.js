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
      showBack: true,
      showRight: false,
      rightText: ''
    };
  },

  returnBack: function () {
    this.props.backFun ? this.props.backFun.call(null)
      : this.props.nav.pop();
  },

  doClickRight: function () {
    this.props.clickRight ? this.props.clickRight.call(null)
      : undefined;
  },

  render: function () {
    return (
      <View style={styles.header}>
        <TouchableOpacity hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                          style={styles.sideButton}
                          onPress={this.props.showBack ? this.returnBack : undefined}>
          {this.props.showBack ? <Text style={styles.sideText}>返回</Text>
            : null}
        </TouchableOpacity>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <TouchableOpacity hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                          style={styles.sideButton}
                          onPress={this.props.showRight ? this.doClickRight : undefined}>
          {this.props.showRight ? <Text style={styles.sideText}>{this.props.rightText}</Text>
            : null}
        </TouchableOpacity>
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
  sideButton: {
    width: 50
  },
  sideText: {
    marginLeft: 10,
    marginRight: 10,
    color: '#FFFFFF'
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

module.exports = Header;