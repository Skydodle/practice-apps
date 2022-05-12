import React from 'react';
import axios from 'axios';
import Add from './Add.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    },
    this.get = this.get.bind(this);
  }

  get() {
    axios.get('/entries')
      .then(res => {
        var entriesData = res.data;
        this.setState({
          entris: entriesData
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  add(input) {
    axios.post('/entries', input)
      .then(res => {
        return this.get();
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
        <Add className="add-entry"

        />
        <Search
        />
        <EntryList
        />
      </main>
      </div>
    )
  }

}



export default App;