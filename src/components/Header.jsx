import {Link} from 'react-router-dom';
import Logo from '../assets/7459344.png';
function Header() {
   return ( 
      <>
               <header className="fixed flex w-full items-center justify-around backdrop-blur-lg m-auto top-0">
                  <div id="logo" className="ml-5 font-medium text-gray-100 underline cursor-default">
                     <img src={Logo} width={150}/>
                     </div>
                  <ul className="inline-flex">
                  <Link to="/" ><li>Home</li></Link>
                     <li>About</li>
                     <Link to="/login" ><li>Contact</li> </Link>
                     <li>Services</li>
                  </ul>
                  
               </header>
      </>
    );
}

export default Header;