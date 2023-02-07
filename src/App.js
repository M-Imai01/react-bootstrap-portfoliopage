import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WorksPage from './components/WorksPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './fontstyle.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
