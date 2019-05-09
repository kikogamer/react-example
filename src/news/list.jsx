import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h3>list</h3>
        {this.props.children}
      </div>
    )
  }
}