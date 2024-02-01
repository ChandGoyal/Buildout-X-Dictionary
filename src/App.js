import React, { useState } from "react";
import "./App.css";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {searchResult && (
          <div>
            <h3>Definition:</h3>
            <p>{searchResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
