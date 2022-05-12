import React from 'react';

const Add = ({word, definition, handleInput, addEntry}) => {
  return(
    <form>
      <label>
        Word
        <input
          type="text"
          name="word"
          value={word}
          onChange={handleInput}
        />
      </label>
      <label>
        Definition
        <input
          type="text"
          name="definition"
          value={definition}
          onChange={handleInput}
        />
      </label>
    </form>
  )
};

export default Add;