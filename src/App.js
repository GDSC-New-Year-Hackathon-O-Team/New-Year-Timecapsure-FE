import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Map from './pages/Map'
import List from './pages/List';
import Write from './pages/Write';
import Main from './pages/Main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main/>}/>
          <Route path="/list" element={<List/>} />
          <Route path="/write" element={ <Write/>} />
          <Route path="/map" element={<Map />} />
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
