/**
 * Created by cs on 17-7-8.
 */
import React, {Component} from 'react';

var List = require('./list');

var Bank = React.createClass({
  render: function () {
    return (
      <List type="银行" nav={this.props.navigator}/>
    );
  }
});

module.exports = Bank;
