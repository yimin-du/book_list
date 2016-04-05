import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	
	renderList() {
		return this.props.books.map(book => {
			return (
				<li key={book.title} 
					className="list-group-item"
					onClick={() => this.props.selectBook(book)}>
					{book.title}
				</li> 
			);
		})
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// anything returned from this function will end up as props in BoolList container
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed to all the reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList as a container. It needs to know about the dispatch method, selectBook
// Make it as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);