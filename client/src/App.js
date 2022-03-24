import "./App.css";
import TopSection from "./components/sections/TopSection/TopSection";
import Landing from "./components/sections/Middle/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchList from "./components/List/SearchList";
import Portfolio from "./components/pages/Portfolio";
import CommunityPage from "./components/pages/CommunityPage";

// useEffect( () => {

//   const marketStatus = async ()=>{
//     const respose = await api.get("/mktstat");

//   }

// }, []);

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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/community/*" element={<CommunityPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
