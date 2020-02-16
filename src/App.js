import React, { Fragment,useEffect } from 'react';
import './App.css';
import SearchComponent from '../src/Components/SearchItems'
import SearchResultsComponent from '../src/Components/SearchResults'
import DataTable from '../src/Components/DataTable';
import { getData } from './redux/actions/'
import store from './redux/store'
function App() {
  useEffect(()=>{
    console.log("App is here")
    store.dispatch(getData());
  })
  return (
    <Fragment>
    <SearchComponent/>
    <SearchResultsComponent/>
    <DataTable/>
    </Fragment>
  );
}


export default App;
