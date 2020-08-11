import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RouteSections from "./RouteSections";
import "../../scss/styles.scss";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <main className="main">
          <RouteSections />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
