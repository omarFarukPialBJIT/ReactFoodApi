import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Result from './pages/Result'
import { useState, useEffect } from 'react'
import Wellcome from './pages/Wellcome';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=5515f416&app_key=%20ca6304afa0bcc7ca0ab5595deb574cee%09`);
      const data = await response.json();
      setApiData(data);
      setLoading(false);
      
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div className='d-flex flex-column min-vh-100 justify-content-between'>
      <div className='sticky-top'>
        <h1 className='bg-dark text-white text-center p-3'>Food Recipe search</h1>
        <div className='container d-flex  p-3 justify-content-center'>
          <Home onSearch={handleSearch} />
        </div>
      </div>
    
      <div className='container'>
        {!apiData && !loading && <Wellcome />}
        {loading && <div className="text-center">Loading...</div>}
        {apiData && !loading && <Result data={apiData} />}
        {apiData && !loading && apiData.hits.length === 0 && (
          <div className="text-center">No data found</div>
        )}
      </div>
      <div className='bg-dark text-white p-3 text-center'>
          <span>Omar Faruk Pial</span>
      </div>
    </div>
  );
}

export default App;
