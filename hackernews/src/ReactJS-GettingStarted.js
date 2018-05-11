// https://gist.github.com/mcneela86/f2e18667e75f0303cdeec9598c02b1ea


import React, {Component} from 'react';
import './App.css';
import axios from 'axios';



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








// let data = [
// 	{ name : "Paul",
// 		avatar_url :"http://google.ro",
// 		company : "Facebook" },
// 	{ name : "Paul2",
// 		avatar_url :"http://google.ro2",
// 		company : "Facebook2" }
// ];
//
//
//
// const Card =(props) => {
// 	return (
// 		<div>
// 			<img width="75" src={props.avatar_url}/>
// 			<div>
// 				<div>{props.name}</div>
// 				<div>{props.company}</div>
// 			</div>
// 		</div>
// 	);
// }
//
//
//
// const CardList = ( props ) => {
// 	return (
// 		<div>
// 			{ props.cards.map(card => <Card key={card.id} {...card}/>)}
// 		</div>
// 	)
// }
//
//
// class Form extends React.Component {
// 	state = { userName: '' }
//
// 	handleSubmit = ( event ) => {
// 		event.preventDefault();
// 		console.log('Event: Form Submit', this.state.userName);
// 		axios.get('https://api.github.com/users/' + this.state.userName)
// 			.then( resp => {
// 				console.log(resp);
// 				this.props.onSubmit(resp.data);
// 				this.setState({ username : ''});
// 			});
// 	}
//
// 	render(){
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<input type="text"
// 					   value={this.state.userName}
// 					   onChange={(event) => this.setState({userName: event.target.value})}
// 					   placeholder="Github username" required/>
// 				<button type="submit">Add card</button>
// 			</form>
// 		);
// 	}
// }
//
// class AppCardList extends React.Component{
//
// 	state = {
// 		cards : [
// 			{ name : "Paul",
// 				avatar_url :"http://google.ro",
// 				company : "Facebook" },
// 			{ name : "Paul2",
// 				avatar_url :"http://google.ro2",
// 				company : "Facebook2" }
// 		]
// 	}
//
// 	addNewCard = (cardInfo) => {
// 		// console.log(cardInfo);
// 		this.setState( prevState => ( { cards: prevState.cards.concat(cardInfo)}))
// 	}
//
// 	render() {
// 		return (
// 			<div>
// 				<Form onSubmit={this.addNewCard}/>
// 				<CardList cards={this.state.cards} />
// 			</div>
// 		);
//
// 	}
// }
//
//
// export default AppCardList;







// ReactDOM.render(<Card />,mountNode);


// ReactDOM.render(<Button label="Doo"/>,mountNode);


const Stars = (props) => {

	let stars = [];
	for ( let i = 0; i < props.numberOfStars; i++ ){
		stars.push(<span>X</span>);
	}

	return (
		<div className="col-lg-2">
			{ stars }
		</div>
	);
}

const Button = (props) => {
	let button;

	switch(props.answerIsCorrect) {
		case true:
			button = <button className="btn-success" onClick={props.acceptAnswer} >Correct - try again</button>;
			break;
		case false:
			button = <button className="btn-danger" >Incorrect - try again</button>;
			break;
		default:
			button = <button className="btn-default"
							 onClick={props.checkAnswer}
							 disabled={ props.selectedNumbers.length === 0 }>Check answer</button>;
			break;
	}

	return (
		<div className="col-lg-2">
		{ button }
		<button className="btn btn-warning btn-sm" onClick={props.redraw}
				disabled={ props.redraws === 0}>
			<i>Redraw</i> {props.redraws}
		</button>
		</div>
	);
}

const Answer = (props) => {
	return (
		<div className="col-lg-2">
			{props.selectedNumbers.map((number, i) =>
				<span key={i} onClick={ () => props.unselectNumber(number)}>
					{number}
				</span>
			)}
		</div>
	);
}


const Numbers = (props) => {

	const numberClassName = ( number ) => {
		if ( props.usedNumbers.indexOf(number) >= 0) {
			return 'used';
		}
		if ( props.selectedNumbers.indexOf(number) >= 0) {
			return 'selected';
		}
	}

	return (
		<div className="card text-center">
			<div>
				{Numbers.list.map((number,i) =>
				<span key={i} className={numberClassName(number)} onClick={ () => props.selectNumber(number)}>
					{number}
				</span>)}
			</div>
		</div>
	);
}

Numbers.list = [1,2,3,4,5,6,7,8,9];



const DoneFrame = (props) => {
	return (
		<div className="text-center">
			<h2>{props.doneStatus}</h2>
		</div>
	);


}


class Game extends React.Component{
	static randomNumber = () => 1 + Math.floor(Math.random()*9);
	state = {
		selectedNumbers: [],
		randomNumberOfStars : Game.randomNumber(),
		usedNumbers : [],
		answerIsCorrect: null,
		redraws: 5,
		doneStatus: null,
	};

	selectNumber = (clickedNumber) => {
		if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
			return;
		}
		this.setState( prevState => ( {
			answerIsCorrect: null,
			selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
		}));
	};

	unselectNumber = (clickedNumber) => {
		this.setState( prevState => ({
			answerIsCorrect: null,
			selectedNumbers : prevState.selectedNumbers.filter(number => number != clickedNumber)
		}))
	};

	checkAnswer = () => {
		this.setState( prevState => ({
			answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce( ( acc,n) => acc + n ,0)
		}));
	};

	acceptAnswer = () => {
		// usedNumbers
		this.setState( prevState => ({
			usedNumbers:prevState.usedNumbers.concat(prevState.selectedNumbers),
			selectedNumbers:[],
			answerIsCorrect:null,
			randomNumberOfStars: Game.randomNumber(),
		}));
	}

	redraw = () => {
		if (this.state.redraws === 0) { return };
		this.setState( prevState => ({
			selectedNumbers:[],
			answerIsCorrect:null,
			randomNumberOfStars: Game.randomNumber(),
			redraws: prevState.redraws - 1,
		}));

	}

	render(){
		const {
			selectedNumbers,
			randomNumberOfStars,
			answerIsCorrect,
			usedNumbers,
			redraws,
			doneStatus
		} = this.state;

		return (
			<div className="container">
				<h3>Play Nine</h3>
				<hr/>
				<div className="row">
				<Stars numberOfStars={randomNumberOfStars}/>
				<Button selectedNumbers={selectedNumbers}
						checkAnswer={this.checkAnswer}
						answerIsCorrect={answerIsCorrect}
						acceptAnswer={this.acceptAnswer}
						redraws = {redraws}
						redraw = {this.redraw}/>
				<Answer selectedNumbers={selectedNumbers}
						unselectNumber={this.unselectNumber}/>
				</div>
				<br />
				{ doneStatus ? <DoneFrame doneStatus={doneStatus}/> :
					<Numbers selectedNumbers={selectedNumbers}
							 selectNumber={this.selectNumber}
							 usedNumbers={usedNumbers}/>

				}
				<br />

			</div>

		);
	}
}


class App2 extends React.Component{
	render(){
		return (
			<div>
				<Game/>
			</div>
		);
	}
}

export default App2;