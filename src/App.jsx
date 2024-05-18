import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
