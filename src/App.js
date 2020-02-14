import React, { Fragment } from 'react';
import './App.css';
import SearchComponent from '../src/Components/SearchItems'
import SearchResultsComponent from '../src/Components/SearchResults'
import DataTable from '../src/Components/DataTable';

function App() {
  return (
    <Fragment>
    <SearchComponent/>
    <SearchResultsComponent/>
    <DataTable/>
    </Fragment>
  );
}

export default App;
