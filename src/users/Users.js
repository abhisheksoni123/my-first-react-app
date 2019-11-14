import React, {Component} from 'react';
import User from './User';


class Users extends Component {
	state = {
		users : [
			{name: "John", age : 100},
			{name: "Abhi", age : 200}
		],
		title : "User List"
	};

	makeStateChange = () => {
		this.setState((oldState) => {
    return {
			users : oldState.users.map((item, age) => Object.assign({}, item,    {
        age: item.age + 100
      }))
    };
   });	
	}
  render() {
    return (
    	<div>
	        <button onClick={this.makeStateChange}>Make me older </button>
	        
	        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
	        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
      </div>
    )
  }
}

export default Users;
