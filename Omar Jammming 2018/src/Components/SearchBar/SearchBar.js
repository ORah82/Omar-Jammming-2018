import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
	      term: ''
	    };

		this.search = this.search.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
	}	

	search(searchTerm){
		this.props.onSearch = searchTerm;
	}

	handleTermChange(event){
		this.setState({term: event.target.value});
	}

	handleKeyPress(e){
		if (e.key === 'Enter') {
			this.props.onSearch = searchTerm;
		}
	}

	render() {
		return (
			<div className="SearchBar">
			<input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
			<a onClick={this.search} onKeyPress={this.handleKeyPress}>SEARCH</a>
			</div>
		);
	}
}

export default SearchBar;
