/**
 * Created by cs on 17-7-8.
 */
import React, {Component} from 'react';

var List = require('./list');

var Food = React.createClass({
  render: function () {
    return (
      <List type="餐饮"/>
    );
  }
});

module.exports = Food;
