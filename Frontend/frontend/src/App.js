import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Nav.js'
import Register from './pages/Register/Register.js'
import Home from './pages/Home/Home.js'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/register' element={<Register/>} />
        </Routes>    
      </div>
    </Router>
  );
}

export default App;
