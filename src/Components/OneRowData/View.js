import React from 'react';
import './style.css';
    class OneRowData extends React.Component{

        render(){
            console.log("this.props is ",this.props)
         return(<div>
            <table>
                  <tr>
                     <th>Uuid </th>
                     <th> Updated at</th>
                     <th>Side </th>
                     <th> Volume</th>
                     <th> Price</th>
                     <th> Trading pair symbol	</th>
                 </tr>
                 {(this.props.isMounted)&this.props.titles.trades.map((trade,index)=>{
                     return(<li key = {index}>
                 <tr>
                     <td>{trade.uuid   }  </td>
                     <td>{trade.updatedAt}  </td>
                     <td>{trade.volume   }  </td>
                     <td>{trade.price }  </td>
                     <td>{trade.side  }  </td>
                     <td>{trade.side  }  </td>
                     {/* <td>{trade.tradingPair}  </td> */}
                 </tr>
                 </li>)            
                 })
                }
         </table> 
     </div> ) 
    }
}
export default OneRowData;
