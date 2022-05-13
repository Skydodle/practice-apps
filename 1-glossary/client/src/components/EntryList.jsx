import React from 'react';
import axios from 'axios';
import Entry from './Entry.jsx';

const EntryList = (props) => (
  <div>
    <h3>Glossary List</h3>
    <h5>There are {props.entries.length} vocabularies.</h5>
    <ul>
      {props.entries.map(entry => {
        return(
          <Entry entry={entry} />
        )
        })}
    </ul>
  </div>
)

export default EntryList;