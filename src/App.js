
import './App.css';
import { Component} from 'react'

class App extends Component {
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
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search monsters' 
          onChange={onSearchChange} 
        />
        {filteredMonsters.map(monster => 
          <div key={monsters.id}>
            <h1>{monster.name}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
