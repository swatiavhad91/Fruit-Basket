import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruitname: '',
      quantity: '',
      price:'',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      fruitname: this.state.fruitname,
      quantity: this.state.quantity,
      price:this.state.price
    });

    this.setState({
      items,
      fruitname: '',
      quantity: '',
      price:'',
      total:''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Table items={ this.state.items }/>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newFruitName={ this.state.fruitname }
          newQuantity={ this.state.quantity }
          newPrice={ this.state.price } 
          newTotal={(this.state.quantity*this.state.price)}/>
      </div>
    );
  }
}

export default App;