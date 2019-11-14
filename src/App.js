import React, {Component} from 'react';
import Users from './users/Users';
import './App.css';


class App extends Component {
	
  render() {
  	const name = "Abhishek";
    return (
        <div >
        	<Users />
			<h2>{name}</h2> 
        </div>
        
    )
  }
}

export default App;
