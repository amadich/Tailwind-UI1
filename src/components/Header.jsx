import {Link} from 'react-router-dom';
import Logo from '../assets/7459344.png';
import { useCookies } from 'react-cookie';
function Header() {
   const [cookie,setCookie] = useCookies(["acc_tokens"]);
   const removeStorageCookie = () => {
      setCookie("acc_tokens" , "");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("img");
   }
   return ( 
      <>
               <header className=" fixed flex w-full items-center justify-around backdrop-blur-lg m-auto top-0 z-10 ">
                  <div id="logo" className="ml-5 font-medium text-gray-100 underline cursor-default">
                     <img src={Logo} width={150}/>
                     </div>
                  <ul className="contents sm:hidden">
                  <Link to="/" ><li>Home</li></Link>
                     <li>About</li>
                     <Link to="/login" ><li>Contact</li> </Link>
                     <li className='btn btn-primary'>Services</li>

                     {
                        cookie.acc_tokens && cookie.acc_tokens != "undefined" ? <li className='w-12 h-12 flex border items-center justify-center cursor-default bg-cover bg-center bg-gray-50' style={{ backgroundImage: `url(http://localhost:3001/Uploads/${window.localStorage.getItem("img")})` }}></li> : null
                     }

                     <Link to="/login" ><li className=' ml-20 text-slate-700 hover:text-slate-950 hover:font-normal '>
                        {
                           cookie.acc_tokens && cookie.acc_tokens != "undefined" ? window.localStorage.getItem("user") : "Sign in / Sign Up"
                        }
                        </li> </Link>
                       
                           {
                              cookie.acc_tokens && cookie.acc_tokens != "undefined" ? <li onClick={removeStorageCookie} className='text-orange-500 font-mono'> Log Out </li> : null
                           }
                        

                  </ul>
                  
               </header>
      </>
    );
}

export default Header;