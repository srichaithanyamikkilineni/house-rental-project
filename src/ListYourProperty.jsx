import React, { useState } from 'react';
import './ListYourProperty.css';

function ListYourProperty() {
  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    setPropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setPropertyDetails({ ...propertyDetails, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., API call)
    console.log(propertyDetails);
  };

  return (
    <div className="list-property-container">
      <h1>List Your Property</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Property Title</label>
          <input
            type="text"
            name="title"
            value={propertyDetails.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Property Description</label>
          <textarea
            name="description"
            value={propertyDetails.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Property Image</label>
          <input type="file" name="image" onChange={handleImageUpload} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ListYourProperty;
