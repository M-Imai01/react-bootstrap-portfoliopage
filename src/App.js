import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WorksPage from './components/WorksPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <HomePage />
      <WorksPage />
    </div>
  );
}

export default App;
