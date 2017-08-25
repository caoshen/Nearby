/**
 *
 * Created by cs on 17-7-8.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet
} from 'react-native';

var Header = require('./header');

_GEO_OPEN = true;
_GEO_TEST_POS = '121.390686,31.213976';

var Detail = require('./detail');
var Geolocation = require('Geolocation');
var Util = require('./util');

var List = React.createClass({
  getInitialState: function () {
    return ({
      list: null,
      count: 0,
      keywords: ''
    });
  },

  _doGetData: function (url) {
    var that = this;
    Util.getJson(url, function (data) {
      if (data.status && data.info === 'OK') {
        var count = data.pois.length > 10 ? 10 : data.pois.length;
        // that._addStorage(data);
        // alert('查询到 ' + count + '条数据');
        that.setState({
          list: data.pois,
          count: count,
        });
      } else {
        alert('没有查询到相应的数据');
      }
    })
  },

  _loadDetail: function (id, name) {
    this.props.nav.push({
      component: Detail,
      title: name,
      passProps: {
        id: id
      }
    });
  },

  _onChangeText: function (val) {
    this.setState({
      keywords: val
    });
  },

  _onEndEditing: function () {
    var that = this;
    var keywords = this.state.keywords;
    var url = Util.searchURL + 'key=' + Util.amapKey + '&keywords='
      + keywords + '&type=' + that.props.type + '&extensions=base';
    that.setState({
      list: null
    });
    AsyncStorage.getItem('pos', function (err, result) {
      if (_GEO_OPEN) {
        if (!err) {
          url += '&location=' + result;
          that._doGetData(url);
        } else {
          alert('定位失败')
        }
      } else {
        url += '&location=' + _GEO_TEST_POS;
        that._doGetData(url);
      }
    });
  },

  _call: function () {

  },

  render: function () {
    var items = [];
    if (this.state.list) {
      var len = this.state.list.length > 10 ? 10 : this.state.list.length;
      for (var i = 0; i < len; ++i) {
        var obj = this.state.list[i];
        items.push(
          <TouchableOpacity style={styles.item}
                            onPress={this._loadDetail.bind(this, obj.id, obj.name)}>
            <View style={styles.row}>
              <View style={{flex: 1}}>
                <Text numberOfLines={1} style={styles.name}>{obj.name}</Text>
                <Text numberOfLines={1} style={styles.type}>{obj.type}</Text>
              </View>
              <View style={styles.distance}>
                <Text numberOfLines={1} style={styles.meter}>{obj.distance}米</Text>
                <Text numberOfLines={1} style={styles.address}>{obj.address}</Text>
              </View>
            </View>
            {
              obj.tel.length ?
                (
                  <TouchableOpacity
                    style={styles.phone}
                    onPress={this._call.bind(this, obj.tel)}>
                    <Text numberOfLines={1}>电话</Text>
                  </TouchableOpacity>
                )
                : null
            }
          </TouchableOpacity>
        );
      }
    }

    var placeholder = '搜索' + this.props.type;

    return (
      <View style={{flexDirection: 'column'}}>
        <Header showBack={false} title={this.props.title} nav={this.props.nav}/>
        <ScrollView >
          <View style={styles.searchBg}>
            <TextInput
              onChangeText={this._onChangeText}
              onEndEditing={this._onEndEditing}
              style={styles.input}
              placeholder={placeholder}>
            </TextInput>
            <View>
              <Text style={styles.tip}>已为您筛选
                <Text style={{color: '#FA2530'}}>{this.state.count}</Text>
                条数据
              </Text>
            </View>
          </View>
          {items}
          {
            items.length ? null :
              <View style={styles.activity}>
                <ActivityIndicator color="#248BFD"/>
              </View>
          }
          <View style={{height: 40}}></View>
        </ScrollView>
      </View>
    );
  },

  componentDidMount: function () {
    var that = this;

    Geolocation.getCurrentPosition(function (data) {
      var lnglat = data.coords.longitude + ',' + data.coords.latitude;
      AsyncStorage.setItem('pos', lnglat);
      var url = Util.searchURL + 'key=' + Util.amapKey + '&keywords='
        + that.props.type + '&extensions=base';
      if (_GEO_OPEN) {
        url += '&location=' + lnglat;
      } else {
        url += '&location=' + _GEO_TEST_POS;
      }
      // alert('定位成功, url: ' + url);
      that._doGetData(url);
    }, function (err) {
      alert('定位失败, 请重新开启应用定位');
    })
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },

  input: {
    height: 38,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderWidth: Util.pixel,
    borderColor: '#868687',
    borderRadius: 3,
    paddingLeft: 5,
    fontSize: 15
  },

  tip: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5,
    color: '#505050'
  },

  row: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingTop: 5
  },

  distance: {
    width: 120,
    alignItems: 'flex-end'
  },

  name: {
    fontSize: 15,
    marginBottom: 6
  },

  type: {
    fontSize: 12,
    color: '#686868'
  },

  meter: {
    fontSize: 12,
    color: '#4C4C4C'
  },

  address: {
    fontSize: 12,
    marginTop: 5,
    color: '#4C4C4C'
  },

  phone: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    borderRadius: 2
  },

  searchBg: {
    backgroundColor: '#fff',
    paddingBottom: 10,
  },

  item: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingBottom: 10,
    borderTopWidth: Util.pixel,
    borderBottomWidth: Util.pixel,
    borderColor: '#ccc',
  },

  activity: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = List;
