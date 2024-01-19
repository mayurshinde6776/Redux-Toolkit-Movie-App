import React from 'react';
import { BrowserRouter as Router, Routes, Route , Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Home from './components/Home/Home';
import PageNotFound from './components/pageNotFound/pageNotFound';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='container'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
