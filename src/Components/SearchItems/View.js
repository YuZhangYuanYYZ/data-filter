import React from 'react';
import './style.css';
class SearchItems extends React.Component{
  

    render(){
         return(<div className = "searchItem">
         <div className = "title">
             <div className = 'Trades'>Trades</div>
             <div className = 'Withdraws'>WithDraws</div>
         </div>
         <div className = "searchLists">
             Uuid<input className = 'oneColum' placehold='uuid'></input><br/>
             Amount<input className = 'oneColum' placehold='amount'></input><br/>
             Bank Reference Number<input className = 'oneColum' placehold='Bank Reference Number'></input><br/>
             status <input className = 'oneColum' placehold='uuid'></input><br/>
             Created at<input className = 'oneColum' placehold='uuid'></input><br/>
             <button className = 'Search'>Search</button>
             <button className = 'Reset'>Reset</button>
         </div>
     </div>)   
    }
}
export default SearchItems;