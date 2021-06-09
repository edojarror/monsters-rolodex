import React, { Component } from 'react';

import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({searchField: event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox searchField = {searchField} handleChange={this.handleChange} placeholder={"search the monster here"} />
        <CardList monsters={filteredMonster} />
        
        
      </div>
    );
  }
  
}

export default App;
