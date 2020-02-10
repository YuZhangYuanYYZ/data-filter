import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
class SearchResults extends React.Component{
    constructor(props){
        super(props);

    }
   

    render(){
         return(<div className = "searchResults">
             <h1>Search Results</h1><br/>
         <div className = "resultsSelect">
            <h1> Total Page</h1>
             <div className = 'Withdraws'></div>
         </div>
         <div className = "searchResultLists">
             
             <button className = 'Reset'>Done</button>
         </div>
     </div>)   
    }
}
export default SearchResults;