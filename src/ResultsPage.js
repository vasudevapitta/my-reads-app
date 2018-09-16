import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ResultsPage extends Component {
  render(){
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.booksProp.filter(eachBook => eachBook.shelf==='currentlyReading')
                      .map(eachBook => (
                        <li key={eachBook.id}>
                        <Book
                        everyBook={eachBook}
                        updateShelfForBook={this.props.updateShelfProp}
                        currentShelf='currentlyReading'
                        />
                        </li>)
                      )
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                      this.props.booksProp.filter(eachBook => eachBook.shelf==='wantToRead')
                      .map(eachBook => (
                        <li key={eachBook.id}>
                        <Book
                        everyBook={eachBook}
                        updateShelfForBook={this.props.updateShelfProp}
                        currentShelf='wantToRead'
                        />
                        </li>)
                      )
                      }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.booksProp.filter(eachBook => eachBook.shelf==='read')
                      .map(eachBook => (
                        <li key={eachBook.id}>
                        <Book
                        everyBook={eachBook}
                        updateShelfForBook={this.props.updateShelfProp}
                        currentShelf='read'
                        />
                        </li>)
                      )
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
    )
  }
}

export default ResultsPage