import logo from './logo.svg';
import './App.css';
import "./css/general.css";
import AllProjects from './components/AllProjects';

function App() {
  return (
    <div className="App">
      {/* Header */}
        <div className="header">
            <a href="index.html" className="button-style">Projekte</a>
            <a href="pages/about.html" className="button-style">Über</a>
        </div>
        <AllProjects/>
    </div>
  );
}

export default App;
