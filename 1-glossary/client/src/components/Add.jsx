import React from 'react';

const Add = ({word, definition, handleInput, addEntry}) => {
  return(
    <div>
      <h4>ADD MORE WORDS</h4>
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
      <button onClick={addEntry}>Add to glossary</button>
    </div>

  )
};

export default Add;