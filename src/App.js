import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from '../src/Components/SearchItems'
import SearchResultsComponent from '../src/Components/SearchResults'

function App() {
  return (
    <Fragment>
    <SearchComponent/>
    <SearchResultsComponent/>
    </Fragment>
  );
}

export default App;
