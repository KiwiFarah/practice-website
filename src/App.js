import React, { Component } from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <PageWrapper>
          <Routes>
            <Route 
            path="/" 
            element={<Home />}
            
            />
          </Routes>
      </PageWrapper>
      </Router>
    );
  }
}

export default App;
