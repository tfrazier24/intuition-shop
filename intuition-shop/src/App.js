import './App.css';
import 'bulma/css/bulma.min.css';
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from './ApplicationViews';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from './components/nav/Navbar';


export const App = () => (
  <Router>
    <ApplicationViews />
  </ Router>
);

export default App;
