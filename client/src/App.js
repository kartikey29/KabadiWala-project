import "./App.css";
import TopSection from "./components/sections/TopSection/TopSection";
import Landing from "./components/sections/Middle/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List/List";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <TopSection></TopSection>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/result" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
