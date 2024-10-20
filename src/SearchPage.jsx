import React, { useState } from 'react';
import './SearchPage.css';

function SearchPage() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleInputChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching with params:', searchParams);
  };

  return (
    <div className="search-page">
      <h1>Find Your Next Home</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name="location"
          placeholder="Where are you going?"
          value={searchParams.location}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="checkIn"
          value={searchParams.checkIn}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="checkOut"
          value={searchParams.checkOut}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="guests"
          min="1"
          value={searchParams.guests}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {/* Add search results components here */}
      </div>
    </div>
  );
}

export default SearchPage;