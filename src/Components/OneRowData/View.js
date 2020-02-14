import React from 'react';
import './style.css';
function OneRowData ({Titles}){
    console.log("Titles is ",Titles)
         return(<div className = "searchResults">
         
          {Titles.trades.map(function(title,index){
console.log("title is ",title)
                return(<li key={index}>
                    {
                     <tr>
                     <td>{title.uuid   }  </td>
                     <td>{title.updatedAt}  </td>
                     <td>{title.volume   }  </td>
                     <td>{title.price }  </td>
                     <td>{title.side  }  </td>
                     <td>{title.tradingPair}  </td>
                 </tr>
                  }
                 </li>)}
              )  }    
         
     </div>)   
    }
export default OneRowData;
