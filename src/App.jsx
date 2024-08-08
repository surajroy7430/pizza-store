import React, { useEffect, useState } from "react";
import Navbar from "./Main/Navbar";
import Footer from "./Main/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Main/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);
  if(loading) {
    return <small>Loading...</small>
  }
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
