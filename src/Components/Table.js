import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
   
    
    return (
      <div id="Table" >
        <table>
          <tbody>
            <tr >
              <th>FruitName</th>
              <th>  Price  </th> 
              <th> Quantity </th>
              <th> Total</th>
              
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.fruitname}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price*item.quantity}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;