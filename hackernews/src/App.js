import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const list = [
	{
		title: 'React',
		url: 'https://facebook.github.io/react/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	}, {
		title: 'Redux',
		url: 'https://github.com/reactjs/redux',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	}, ];

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class Developer {
	constructor(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname; }
	getName() {
		return this.firstname + ' ' + this.lastname;
	}
}

class App extends Component {
	render() {
		const robin = new Developer('Robin', 'Wieruch');
		console.log(robin.getName());
	    let firstName = "a s Gigel ce mai mare";
	    let lastName = "Haiduc";
		const helloWorld = 'Welcome to the Road to learn React';
		return (
			<div className="App">
				<h2>Hello {firstName}  + {lastName}</h2>
				<h2>{helloWorld}</h2>

				{list.map(function(item) {
					return (
						<div key={item.objectID}>
							<span><a href={item.url}>{item.title}</a></span>
							<span>{item.author}</span>
							<span>{item.num_comments}</span>
							<span>{item.points}</span>
						</div>
					);
				})}
			</div>
		);

	} }

export default App;
