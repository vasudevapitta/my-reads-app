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

  refreshStuff(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  componentDidMount(){
    this.refreshStuff()
  }

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