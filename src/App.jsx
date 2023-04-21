import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import './assets/css/main.css';
import Article from './components/Article';
import Header from './components/Header';
import Main from './Pages/main';
import Login from './Pages/Login';
function App() {
  return ( 
      <>
          <Router>
                 
              <Routes>
                  <Route path='/' element={<Main />}/>
                  <Route path='/login' element={<Login />} />
              </Routes>

          </Router>
      </>
   );
}

export default App;