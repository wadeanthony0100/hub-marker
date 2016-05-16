import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <input type="text" onClick="this.setSelectionRange(0, this.value.length)" value={ this.props.username } id="authed-user" />
      </div>
    );
  }
}

