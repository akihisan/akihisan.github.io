import './App.css';
import "./css/general.css";
import AllProjects from './components/AllProjects';
import { useState } from 'react';
import About from './components/About';
import Table from './components/myLibrary/Table';

function App() {
  const [page, setPage] = useState("projects");

  return (
    <div className="App">
      {/* Header */}
        <div className="header">
            <button className="button-style" onClick={() => setPage("projects")}>Projekte</button>
            <button className="button-style" onClick={() => setPage("about")}>Über</button>
        </div>
        {page === "projects" && <AllProjects setPage={setPage}/>}
        {page === "about" && <About/>}
        {page === "library" && <Table/>}
    </div>
  );
}

export default App;
