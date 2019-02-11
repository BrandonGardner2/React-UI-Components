import React from "react";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import Footer from "./components/FooterComponents/Footer";
import CardContainer from "./components/CardComponents/CardContainer";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
