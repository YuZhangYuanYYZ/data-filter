import React from 'react';
import './style.css';
class SearchResults extends React.Component{


    render(){
         return(<div className = "searchResults">
             <h1>Search Results</h1><br/>
         <div className = "resultsSelect">
            <h1> Total Page</h1>
             <div className = 'currentPage'></div>
             <table>
                 <tr>
                     <th>&lt;</th>
                     <th>1</th>
                     <th>2</th>
                     <th>3</th>
                     <th>4</th>
                     <th>5</th>
                     <th>></th>
                 </tr>
             </table>
         </div>
         <div className = "searchResultLists">
             
             
         </div>
         
     </div>)   
    }
}
export default SearchResults;