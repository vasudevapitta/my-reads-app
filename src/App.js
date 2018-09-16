import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ResultsPage from './ResultsPage'

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

//refetches books from backend and assigns them to the books array in the state triggering a re-render
  refreshStuff(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

//function which gets invoked right after the component is first rendered to the DOM
  componentDidMount(){
    this.refreshStuff()
  }

//updates the book's shelf when user changes the shelf for the book
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => {
      this.refreshStuff()
    });
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={()=>(
            <ResultsPage
            booksProp={this.state.books}
            updateShelfProp={this.updateShelf}
            />
        )}/>
        <Route path='/search' render={()=>(
            <SearchPage
            booksProp={this.state.books}
            updateShelfProp={this.updateShelf}
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp