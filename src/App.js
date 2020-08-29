import React from 'react';
import MonsterList from './components/CardsList/MonsterList';
import SearchMonster from './components/Search/SearchMonster';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchText: '',
      monsters: [],
    }
    this.changeMonsters = this.changeMonsters.bind(this);
    this.changeSearchText = this.changeSearchText.bind(this);
  }

  changeSearchText = (search) => {
    console.log(search.target.value)
    this.setState({ searchText: search.target.value });
  }

  changeMonsters = () => {
    console.log("this.state.searchText:", this.state.searchText, ":")
    this.setState({
      monsters: this.state.monsters.filter(monster => {
        return monster.name.toLowerCase().includes(this.state.searchText.toLowerCase())
      })
    });


  }

  componentDidMount() {
    console.log('here ')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => {
        this.setState({ monsters: users });
      }).catch(error => {
        console.log(error)
      })

  }
  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase())
    });

    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>

        <SearchMonster changeSearchText={this.changeSearchText} searchText={searchText} />
        <MonsterList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
