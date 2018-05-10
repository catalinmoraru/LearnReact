// const Button = function (props) {
// 	return (
// 		<button>{props.label}</button>
// 	);
// }
//
//
// class Button extends React.Component{
// 	state = { counter : 1 };
//
// 	handleClick = () => {
// 		// this === component instance
// 		this.setState({
// 			counter : this.state.counter + 1
// 		});
// 	};
//
// 	render() {
// 		return(
// 			<button onClick={this.handleClick}>
// 				{this.state.counter}</button>
// 		);
// 	}
// }



// class Button extends React.Component{
// 	state = { counter : 1 };
//
// 	handleClick = () => {
// 		// this === component instance
// 		this.setState( (prevState) => ({
// 			counter: prevState.counter + 1
// 		}));
// 	};
//
// 	render() {
// 		return(
// 			<button onClick={this.handleClick}>
// 				{this.state.counter}</button>
// 		);
// 	}
// }




// class Button extends React.Component{
//
// 	handleClick = () => {
// 		this.props.onClickFunction(this.props.incrementValue);
// 	};
//
// 	render() {
// 		return(
// 			<button onClick={ this.handleClick}>
// 				+{this.props.incrementValue}
// 			</button>
// 		);
// 	}
// }
//
// const Result = (props) => {
// 	return (
// 		<div>{props.counter}</div>
// 	);
// }
//
// class App extends React.Component {
// 	state = { counter : 1 };
//
// 	incrementCounter = (incrementValue) => {
// 		this.setState( (prevState) => ({
// 			counter: prevState.counter + incrementValue
// 		}));
// 	}
//
// 	render(){
// 		return(
// 			<div>
// 				<Button incrementValue={1} onClickFunction={this.incrementCounter}/>
// 				<Button incrementValue={5} onClickFunction={this.incrementCounter}/>
// 				<Button incrementValue={10} onClickFunction={this.incrementCounter}/>
// 				<Button incrementValue={100} onClickFunction={this.incrementCounter}/>
// 				<Result counter={this.state.counter}/>
// 			</div>
// 		);
// 	}
// }

import React, {Component} from 'react';
import axios from 'axios';

let data = [
	{ name : "Paul",
		avatar_url :"http://google.ro",
		company : "Facebook" },
	{ name : "Paul2",
		avatar_url :"http://google.ro2",
		company : "Facebook2" }
];



const Card =(props) => {
	return (
		<div>
			<img width="75" src={props.avatar_url}/>
			<div>
				<div>{props.name}</div>
				<div>{props.company}</div>
			</div>
		</div>
	);
}



const CardList = ( props ) => {
	return (
		<div>
			{ props.cards.map(card => <Card key={card.id} {...card}/>)}
		</div>
	)
}


class Form extends React.Component {
	state = { userName: '' }

	handleSubmit = ( event ) => {
		event.preventDefault();
		console.log('Event: Form Submit', this.state.userName);
		axios.get('https://api.github.com/users/' + this.state.userName)
			.then( resp => {
				console.log(resp);
				this.props.onSubmit(resp.data);
				this.setState({ username : ''});
			});
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text"
					   value={this.state.userName}
					   onChange={(event) => this.setState({userName: event.target.value})}
					   placeholder="Github username" required/>
				<button type="submit">Add card</button>
			</form>
		);
	}
}

class AppCardList extends React.Component{

	state = {
		cards : [
			{ name : "Paul",
				avatar_url :"http://google.ro",
				company : "Facebook" },
			{ name : "Paul2",
				avatar_url :"http://google.ro2",
				company : "Facebook2" }
		]
	}

	addNewCard = (cardInfo) => {
		// console.log(cardInfo);
		this.setState( prevState => ( { cards: prevState.cards.concat(cardInfo)}))
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.addNewCard}/>
				<CardList cards={this.state.cards} />
			</div>
		);

	}
}


export default AppCardList;


// ReactDOM.render(<Card />,mountNode);


// ReactDOM.render(<Button label="Doo"/>,mountNode);



