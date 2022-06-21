
import './App.css';
import { Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log(searchField);

  useEffect(() => {
    //console.log('useEffect-setMonsters');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //.then(users => console.log(users));
    .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    //console.log('useEffect-setFilteredMonster');
    const filteredMonstersNew = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonstersNew);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    //console.log('function:', searchField);
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString);
  }

  return(
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox className='search-box' placeholder='Search Monsters' onChangeHandler={onSearchChange}/>
        <CardList monsters={filteredMonsters} />
    </div>
  )
}
class Appp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters : [],
      searchField: '',
    }
    console.log('1-constructor');
  }

  componentDidMount() {
    console.log('3-componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      //.then(users => console.log(users));
      .then(users => this.setState({monsters: users}));
      //OR
      // .then(users => this.setState(
      //   () => {
      //     return {monsters: users};
      //   }, 
      //   () => {
      //     console.log(this.state);
      //   }
      // ))
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase()
    this.setState({searchField});
  }

  render () {
    console.log('2-render');

   const {monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        {/* <input 
          className='search-box' 
          type='search' 
          placeholder='Search monsters' 
          onChange={onSearchChange} 
        /> */}
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters' className='search-box' />
        <CardList monsters={filteredMonsters}/>
        {/* {monsters.map(monster => 
          <div key={monster.id}>
              <h1>{monster.name}</h1>
          </div>
        )}  */}
      </div>
    );
  }
}

export default App;
