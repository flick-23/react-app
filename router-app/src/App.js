import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content"></div>
        <Routes>
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/" component={Home} />
        </Routes>
      </div>
    );
  }
}

export default App;
