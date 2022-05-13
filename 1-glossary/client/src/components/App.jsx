import React from 'react';
import axios from 'axios';
import Add from './Add.jsx';
import Search from './Search.jsx';
import EntryList from './EntryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      word: '',
      definition: ''
    },
    // bind get method to this
    this.get = this.get.bind(this);
  }

  // handle input
  handleInput(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    })
  }

  // get all entries method
    // should get request to server for all entries from db
    // udpate state with data
  get() {
    axios.get('/entries')
      .then(res => {
        var entriesData = res.data;
        this.setState({
          entries: entriesData
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount(){
    this.get();
  }

  // add entry method
  addEntry() {
    // do nothing if input fields are empty
    if (this.state.word === '' || this.state.definition === '') return;
    // should post to server, if success get data from db
    var input = {word: this.state.word, definition: this.state.definition};
    axios.post('/entries', input)
      .then(res => {
        this.get();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  search (term) {
    // let query = {word: term};
    axios.get('/entries/:word', {params: {word: term}})
      .then(res => {
        var result = [];
        result.push(res.data);
        console.log('search data:', res.data);
        this.setState({
          entries: result
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteEntry() {
    axios.delete('/entries', input)
      .then(res => {
        this.get();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
      <h1>Glossary App</h1>
      <main>
        <Add
          word={this.state.word}
          definition={this.state.definition}
          handleInput={this.handleInput.bind(this)}
          addEntry={this.addEntry.bind(this)}
        />
        <Search
          onSearch={this.search.bind(this)}
        />
        <EntryList
          entries={this.state.entries}
          // word={this.state.word}
          // definition={this.state.definition}
          // handleInput={this.handleInput.bind(this)}
          // addEntry={this.addEntry.bind(this)}
        />
      </main>
      </div>
    )
  }

}



export default App;