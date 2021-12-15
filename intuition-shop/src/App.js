import './App.css';
import 'bulma/css/bulma.min.css';
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from './ApplicationViews';
import { BrowserRouter as Router } from "react-router-dom";


export const App = () => (
  <Router >
    <ApplicationViews />
  </ Router>
);

export default App;
