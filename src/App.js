import "./App.css";
import React, { Component } from "react";
import CardList from "./card-list/card-list";
import SearchBar from "./search-bar/search-bar";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Hit and Run Group</h1>
        <SearchBar onSearch={this.handleSearch} placeholder="search monster" />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
