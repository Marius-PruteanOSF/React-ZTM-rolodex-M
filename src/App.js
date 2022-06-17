
import './App.css';
import { Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters : []
    }
  }

  componentDidMount() {
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

  render () {
    const {monsters} = this.state;
    return (
      <div className="App">
        {monsters.map(monster => 
          <div>
            <h1 key={monsters.id}>{monster.name}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
