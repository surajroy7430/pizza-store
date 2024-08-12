import React, { useEffect, useState } from "react";
import Footer from "./Main/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage";
import Header from "./Main/Header";
import About from "./Main/About";
import Cards from "./Main/Items/Cards";
import AddNewItem from "./Main/Items/AddNewItem";
import UpdateItem from "./Main/Items/UpdateItem";
import Contact from "./Main/Contact";
import SearchedCards from "./Main/Items/SearchedCards";
import { PropagateLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);
  if(loading) {
    return (
      <div className="spinner-container">
        <PropagateLoader />
      </div>
    )
  }
  
  return (
    <div className="app">
      <Header setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pizzas" element={<Cards />} />
        <Route path="/search-pizza" element={<SearchedCards searchResults={searchResults} />} />
        <Route path="/add-pizza" element={<AddNewItem />} />
        <Route path="/update-pizza/:id" element={<UpdateItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
