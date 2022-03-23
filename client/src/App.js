import "./App.css";
import TopSection from "./components/sections/TopSection/TopSection";
import Landing from "./components/sections/Middle/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchList from "./components/List/SearchList";

function App() {
  return (
    <>
      <Router>
        <TopSection></TopSection>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Landing />
              </div>
            }
          />
          <Route path="/result" element={<SearchList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
