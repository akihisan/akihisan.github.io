import './App.css';
import "./css/general.css";
import AllProjects from './components/AllProjects';
import About from './components/About';
import Library from './components/myLibrary/Library';
import Mordor from './components/MordorWalk/Mordor';
import { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AppContent(){
  const [page, setPage] = useState("projects");

  const location = useLocation();
  const isLibrary = location.pathname === "/library";
  const isMordor = location.pathname === "/mordor";

  return (
    <div className="App">
      {/* Header */}
        {!isLibrary && <div className="header">
          <button className="button-style" onClick={() => setPage("projects")}>Projekte</button>
          <button className="button-style" onClick={() => setPage("about")}>Über</button>
        </div>}
        {!(isLibrary || isMordor) && page === "projects" && <AllProjects setPage={setPage}/>}
        {page === "about" && <About/>}
        <Routes>
          <Route path="/library" element={<Library/>} />
          <Route pathe="/mordor" element={<Mordor/>} />
        </Routes>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent/>
    </HashRouter>
  );
}

export default App;
