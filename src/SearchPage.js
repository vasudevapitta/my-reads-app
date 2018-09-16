import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

class SearchPage extends Component {
  state = {
    query: '',
    bookResults: []
  }

  updateQuery = (newQuery) => {
    this.setState({
      query: newQuery
    })
    this.updateBookResults(newQuery);
  }

  updateBookResults = (newQuery) => {
    if(newQuery){
    BooksAPI.search(newQuery).then((bookResultsResp)=>{
      if(bookResultsResp.error){
        this.setState({ bookResults: [] });
      }
      else {
        this.setState({ bookResults: bookResultsResp })
      }
    })
    }
    else {
      this.setState({ bookResults: [] });
    }
  }

	render(){
		return (
		<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(e)=>this.updateQuery(e.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.bookResults.map(eachBook => {
                  let shelf = 'none';

                  this.props.booksProp.map(book => (
                    book.id === eachBook.id ?
                    shelf = book.shelf : 'none'
                  ));

                  return (
                  <li key={eachBook.id}>
                  <Book
                  everyBook={eachBook}
                  updateShelfForBook={this.props.updateShelfProp}
                  currentShelf={shelf}
                  />
                  </li>
                  );
                })
              }
              </ol>
            </div>
          </div>
		)
	}
}

export default SearchPage