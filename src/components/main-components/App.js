import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RouteSections from "./RouteSections";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <RouteSections />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
