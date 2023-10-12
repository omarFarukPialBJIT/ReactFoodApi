
import  { useState } from 'react';

const Home = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <div className='d-flex'>
      <input
      className='form-control'
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Enter a food or vegetable name"
      />
      <button className='btn btn-dark' onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Home;
