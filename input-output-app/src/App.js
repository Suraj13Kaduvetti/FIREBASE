import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutputText(inputText);
  };

  return (
    <div className="App">
      <h1>Input-Output React App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter some text:
          <input 
            type="text" 
            value={inputText} 
            onChange={handleInputChange} 
            placeholder="Type here..." 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Output:</h2>
      <p>{outputText}</p>
    </div>
  );
}

export default App;
