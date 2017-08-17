/**
 * Created by cs on 17-7-8.
 */
import React, {Component} from 'react';

var List = require('./list');

var Movie = React.createClass({
  render: function () {
    return (
      <List type="电影" nav={this.props.navigator}/>
    );
  }
});

module.exports = Movie;
