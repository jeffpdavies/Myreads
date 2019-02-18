import React from 'react'

class search extends React.Component {
	render() {
	  	const allBooks = this.props.allBooks; 
	 	const currentlyReading = (allbooks.filter => bookshelf === "currentlyReading");
	 	const currentlyReading = (allbooks.filter => bookshelf === "want to read");
	 	const currentlyReading = (allbooks.filter => bookshelf === "Read");
	 	console.log("here", allBooks);
	 	return {
<div className="list-books-content">
        <div>
        <shelf books = currentlyReading title =("currently reading") /> //Currently reading books
        <shelf books = currentlyReading title =("want to read") /> //want to read
        <shelf books = currentlyReading title =("read")changeShelf=(this.props.changeShelf/> //read
      </div>
    </div>

	 	};
	 }

	}

	export deafult shelves;


              
              