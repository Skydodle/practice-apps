import React from 'react';

var Entry = function({entry}) {
  return (
    // <li word={entry.word} definition={entry.definition}>
    <div>
    <div>
      Word: {entry.word}
    </div>
    <div>
      Definition: {entry.definition}
    </div>
    </div>


    // </li>
  )
}

export default Entry;