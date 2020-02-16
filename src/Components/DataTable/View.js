import React from 'react';
import OneRowData from '../OneRowData';
import './style.css';
class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state={trades:null,IsMounted:false};
    }


    
    render(){
         return(<div className = "searchResults">
                    
                <OneRowData ></OneRowData>              
                  
         <div className = "searchResultLists">                  
         </div>
     </div>)   
    }
}
export default SearchResults;