import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import shelves from './component/shelves.js';
import search from './component/search.js';
import searchButton from './component/seachbutton.js';
import header from './component/header.js';

import BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
      books: []
   }

    updateSearchPagestate = state => {
      console.log("here",state);
      this.setState({showSearchPage: state});
    };

    componentdidMount() {
      BooksAPI.getAll()
      .then((books) =>
      this.setState(() => ({
        books
      }))
    )
}

    }
    changeBookShelf(shelf, book) {

    }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          //search component
          <search showSearchPage=(this.updateSearchPagestate)/>       
            ) : (
      <div className="list-Books"/>
          <header/>
          <shelves allBooks=(this.state.books) changeShelf(this.changeBookShelf/>
          <searchButton showSearchPage= (this.updateSearchPagestate)/>

          
            <shelves (this.state.books) />

            

            <header />
          </div>

          )}
      </div>
    };
  }
}

export default BooksApp;
