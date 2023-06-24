import React from 'react';
import "../styles/searchResults.css";

const SearchResults = ({results}) => {

  if (!results.length) {
    return <p></p>
  } else {
    return (
      <div>
        {results.map((result) => (
          <img className="search-results" src={result} alt="spaceImage" />
        ))}
      </div>
    );
  }
}

export default SearchResults;
