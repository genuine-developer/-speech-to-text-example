'use strict';
import React, { Component } from 'react';
import PetsList from './PetsList';

class Pets extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.setState({
      pets: [
        {name: 'fluffy'},
        {name: 'puffy'}
      ]
    })
  }
  render() {
    const pets = this.state.pets;
    return(
      <div>
        Add new link<br/>
        <PetsList pets={pets} />
      </div>
    );
  }
}

export default Pets;