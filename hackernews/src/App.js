import React, {Component} from 'react';
import './App.css';

// https://github.com/the-road-to-learn-react/hackernews-client/blob/master/src/App.js



const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;


const Search = ({
					value,
					onChange,
					onSubmit,
					children
				}) =>
	<form onSubmit={onSubmit}>
		<input
			type="text"
			value={value}
			onChange={onChange}
		/>
		<button type="submit">
			{children}
		</button>
	</form>;

class Table extends Component {
	render() {
		console.log(url);
		const {list, onDismiss} = this.props;
		return (
			<div>
				{list.map(item =>
					<div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
						<span>{item.author}</span>
						<span>{item.num_comments}</span>
						<span>{item.points}</span>

						<Button onClick={() => onDismiss(item.objectID)}>
							Dismiss
						</Button>


					</div>)}
			</div>);
	}
}

class Button extends Component {
	render() {
		const {
			onClick, className ='', children,
		} = this.props;
		return (<button
			onClick={onClick}
			className={className}
			type="button"
		>
			{children}
		</button>);
	}
}

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			result: null,
			searchTerm: DEFAULT_QUERY,
		};

		this.setSearchTopStories = this.setSearchTopStories.bind(this);
		this.onDismiss = this.onDismiss.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
	}

	setSearchTopStories(result) {
		this.setState({ result });
	}

	onDismiss(id) {
		const isNotId = item => item.objectID !== id;
		const updatedHits = this.state.result.hits.filter(isNotId);
		this.setState({
			result: { ...this.state.result, hits: updatedHits }
		});
	}

	onSearchChange(event) {
		this.setState({searchTerm: event.target.value});
	}

	onSearchSubmit() {
		const { searchTerm } = this.state;
		this.fetchSearchTopStories(searchTerm);
	}

	fetchSearchTopStories(searchTerm) {
		fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
			.then(response => response.json())
			.then(result => this.setSearchTopStories(result))
			.catch(error => error);
	}


	render() {

		const { searchTerm, result } = this.state;
		// if (!result) { return null; }
		// return (
		// 	<div className="page">
		// 		... <Table
		// 		list={result.hits}
		// 		pattern={searchTerm}
		// 		onDismiss={this.onDismiss}
		// 	/>
		// 	</div>
		// );

		return (
			<div className="page">
				<div className="interactions">
					<Search
						value={searchTerm}
						onChange={this.onSearchChange}
					>
						Search
					</Search>
				</div>
				{ result &&
				<Table
					list={result.hits}
					onDismiss={this.onDismiss}
				/> }
			</div> );

	}


	componentDidMount() {
		const { searchTerm } = this.state;
		this.fetchSearchTopStories(searchTerm);
	}
}

export default App;

export {
	Button,
	Search,
	Table, };