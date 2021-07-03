import React, { Component } from 'react';


class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>* * * * * Fruit Basket * * * * *</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
            
          <label For="fruitname">
          FruitName:  
          <input required id="fruitname" value={this.props.newFruitName} 
            type="text"  name="fruitname" pattern="[A-Za-z]+" title="FruitName must be character only.. It can not contain
            numbers or symbols.."
            onChange={this.props.handleInputChange} /><i>(FruitName must be characters only..)</i>
          </label><br></br><br></br>

          
          <label for="price">
          Price:  
          <input required id="price" value={this.props.newPrice} 
            type="price" name="price" pattern="^[+-]?([0-9]*[.])?[0-9]+$" title="Price can be decimal OR floating point
            number only.. It can not character or symbols.."
            onChange={this.props.handleInputChange} /><i>(Price Must be a number..)</i>

           
          </label><br></br><br></br>
          

          <label for="quantity">
          Quantity: 
          <input required id="quantity" value={this.props.newQuantity} 
            type="text" inputMode="numeric" pattern="[0-9]*" title="Quantity should be decimal number only.. It can not be floationg 
            point number or symbol or character...." name="quantity"
            onChange={this.props.handleInputChange} /><i>(Quantity must be decimal number..)</i>
          </label><br></br><br></br>      

          


          <button type="submit" value="Submit">Add Item</button>

          
        </form>
      </div>
    );
  }
}

export default Form;