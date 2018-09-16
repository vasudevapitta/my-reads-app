import React, { Component } from 'react'

class Book extends Component {

	render(){
		let bookThumbnail = this.props.everyBook.imageLinks ? this.props.everyBook.imageLinks.thumbnail : '';
		return(
						<div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookThumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select
                              onChange={(event)=>(
                              	this.props.updateShelfForBook(this.props.everyBook, event.target.value)
                              	)}
							  value={this.props.currentShelf}
                              >
                                <option value="move">Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.everyBook.title}</div>
                          <div className="book-authors">{this.props.everyBook.authors}</div>
                        </div>
		)
	}
}

export default Book