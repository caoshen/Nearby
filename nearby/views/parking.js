/**
 * Created by cs on 17-7-8.
 */
import React, {Component} from 'react';

var List = require('./list');

var Parking = React.createClass({
  render: function () {
    return (
      <List type="停车场" nav={this.props.navigator}/>
    );
  }
});

module.exports = Parking;
