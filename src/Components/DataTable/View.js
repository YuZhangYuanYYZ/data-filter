import React from 'react';
import OneRowData from '../OneRowData';
import './style.css';
class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state={trades:null,isMounted:false};//{Uuid:0,Updated:1,Side:2,Volume:3,Price:4,Trading:5};

    }

  componentDidMount() {
      window.fetch(` https://blockchaintech-code-test.herokuapp.com/trades.json`)
      .then(res => res.json())
      .then(json => {
         console.log("res.json is ",json)
        this.setState({trades:json,isMounted:true});
       
        });
       
        }
       
    render(){
        console.log("this.state",this.state)
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
               {this.state.isMounted?<OneRowData Titles= {this.state.trades} ></OneRowData>:null}
               
             </table>
        
         <div className = "searchResultLists">                  
         </div>
     </div>)   
    }
}
export default SearchResults;