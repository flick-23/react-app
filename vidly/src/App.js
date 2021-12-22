import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="/" element={<Navigate to="movies" />} />
        <Route path="*" element={<Navigate to="not-found" />} />
      </Routes>
    </main>
  );
}

export default App;
