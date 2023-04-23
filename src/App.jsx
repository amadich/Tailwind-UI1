import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import './assets/css/main.css';
import Article from './components/Article';
import Header from './components/Header';
import Main from './Pages/main';
import Login from './Pages/Login';
import { useCookies } from 'react-cookie';
function App() {
    try {
        const [cookie,setCookie] = useCookies(["acc_tokens"]);
        const token_local_cookie = window.localStorage.getItem("token");
        token_local_cookie ? setCookie("acc_tokens",token_local_cookie) : null;
    } catch (error) {
        console.log("Cookie Worning!!");
    }
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