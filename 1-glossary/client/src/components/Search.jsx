import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  search() {
    this.props.onSearch(this.state.term)
  }

  render() {
    return(
      <div>
        Enter a word to search: <input value={this.state.term} onChange={this.onChange}/>
        <button onClick={this.search}> Find </button>
      </div>
    )
  }
}

export default Search;