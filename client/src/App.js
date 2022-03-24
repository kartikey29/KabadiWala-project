import "./App.css";
import TopSection from "./components/sections/TopSection/TopSection";
import Landing from "./components/sections/Middle/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchList from "./components/List/SearchList";
import Portfolio from "./components/pages/Portfolio";
import CommunityPage from "./components/pages/CommunityPage";
import Resources from "./components/pages/Resources";
import BearBull from "./components/Resources/nseVsBse/BearBull";
import { useEffect } from "react";
import api from "./config/api";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const portfolioData = async () => {
      const response = await api.get("/portfolio");
      dispatch({
        type: "GOT_PORTFOLIO_DATA",
        payload: { data: response.data },
      });
    };
    const balance = async () => {
      const response = await api.get("/balance");
      dispatch({
        type: "GOT_BALANCE",
        payload: { data: response.data },
      });
    };
  }, []);
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/community/*" element={<CommunityPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/BearBull" element={<BearBull />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
