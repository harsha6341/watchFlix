import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home.js";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbid" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
