import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1 className='display-5'>Flash Quiz</h1>
      <p className='display-1' style={{ marginBottom: '10px' }}>
        Welcome to Flash Quiz a place where you can hone your knowledge in
        different categories.
      </p>

      <Link to='/start' className='btn btn-primary'>
        Get Started
      </Link>
    </div>
  );
};

export default Home;
