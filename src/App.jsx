import React from "react";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* <main className="flex-grow"> */}
        <Container />
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default App;