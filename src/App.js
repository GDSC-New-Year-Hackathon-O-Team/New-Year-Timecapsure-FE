import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import List from "./pages/List";
import ListDetail from './pages/ListDetail';
import ListOthers from "./pages/ListOthers";
import Main from "./pages/Main";
import Map from "./pages/Map";
import NavBar from "./components/NavBar";
import Write from "./pages/Write";

function App() {
  return (

    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
          <Route path = "/map" element = {<Map/>}/>
          <Route path = "/list" element = {<List/>}/>
          <Route path = "/write" element = {<Write/>}/>
          <Route path = "/list/:keyId" element = {<ListDetail/>}/>
          <Route path = "/list/:id/others" element = {<ListOthers/>}/>
        </Routes>
    </BrowserRouter>


  );
}

export default App;
