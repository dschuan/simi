import React, { Component } from 'react';


class Lobby extends Component {
  
  renderUserList() {
    const users = this.props.users
    console.log(users)
    const userList = users.map((user) => {
      return (
        <div id={user} className='lobby-user'>
          <p> {user}</p>
        </div>
      )
    })
    return userList
  }
  render() {
    return (
      <div className="parent">
        {/* THIS IS A COMMENT <Home /> */}
          {this.renderUserList()}
      </div>
    );
  }
}

export default Lobby;
