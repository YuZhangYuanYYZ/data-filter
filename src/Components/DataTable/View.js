import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
class SearchResults extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
         return(<div className = "searchResults">
             <table>
                 <tr>
                     <th>Uuid </th>
                     <th> Updated at</th>
                     <th>Side </th>
                     <th> Volume</th>
                     <th> Price</th>
                     <th> Trading pair symbol	</th>
                 </tr>
             </table>
             <div className = 'currentPage'></div>
             <table>
                 <tr>
                     <th>{"<"}</th>
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
             
             <button className = 'Reset'>Done</button>
         </div>
     </div>)   
    }
}
export default SearchResults;