/**
 * Created by cs on 17-7-6.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
var Food = require('./views/food');
var Movie = require('./views/movie');
var Parking = require('./views/parking');
var Bank = require('./views/bank');

var Navigation = require('./common/navigation');

var Nearby = React.createClass({
  getInitialState: function () {
    return ({
      selected: 'food'
    });
  },

  render: function () {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selected === 'food'}
            title="美食"
            renderIcon={() => <Icon name="coffee" size={20} color="#DDD" />}
            renderSelectedIcon={() => <Icon name="coffee" size={20} color="#4F8EF7" />}
            onPress={() => this.setState({ selected: 'food' })}>
            <Navigation component={Food}/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selected === 'movie'}
            title="电影"
            renderIcon={() => <Icon name="film" size={20} color="#DDD" />}
            renderSelectedIcon={() => <Icon name="film" size={20} color="#4F8EF7" />}
            onPress={() => this.setState({ selected: 'movie' })}>
            <Navigation component={Movie}/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selected === 'parking'}
            title="停车"
            renderIcon={() => <Icon name="car" size={20} color="#DDD" />}
            renderSelectedIcon={() => <Icon name="car" size={20} color="#4F8EF7" />}
            onPress={() => this.setState({ selected: 'parking' })}>
            <Navigation component={Parking}/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selected === 'bank'}
            title="银行"
            renderIcon={() => <Icon name="bank" size={20} color="#DDD" />}
            renderSelectedIcon={() => <Icon name="bank" size={20} color="#4F8EF7" />}
            onPress={() => this.setState({ selected: 'bank' })}>
            <Navigation component={Bank}/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Nearby;