import { useEffect, useRef, useState } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cards from "./components/Cards";
import SearchedCards from "./components/SearchedCards";
import AddNewItem from "./components/AddNewItem";
import UpdateItem from "./components/UpdateItem";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const inputRef = useRef();
  const lastInputRef = useRef();
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <PropagateLoader />
      </div>
    );
  }

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        transition={Zoom}
        draggable={false}
        theme="dark"
        closeOnClick
      />

      <Header
        setSearchResults={setSearchResults}
        inputRef={inputRef}
        lastInputRef={lastInputRef}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pizzas" element={<Cards />} />
        <Route
          path="/search-pizza"
          element={
            <SearchedCards recipes={searchResults} searchQuery={lastInputRef.current} />
          }
        />
        <Route path="/add-pizza" element={<AddNewItem />} />
        <Route path="/update-pizza/:id" element={<UpdateItem />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
