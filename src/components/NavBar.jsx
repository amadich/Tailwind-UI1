import { useCookies } from "react-cookie";
import Logo from '../assets/7459344.png';
import { Link } from "react-router-dom";
import ShowmenuP from "./ShowmenuP";
function NavBar() {
   const [cookie,setCookie] = useCookies(["acc_tokens"]);
   

   

   

   return ( 
      <>
            <div className="fixed navbar top-0  text-slate-100 backdrop-blur z-10 h-40">
               <div className="flex-1">
                  <Link to="/"><img src={Logo} width={150}/></Link>
                  
               </div>
               <div className="flex-none gap-2">
                  <div className="form-control">
                     <input type="text" placeholder="Search" className="input input-bordered bg-transparent border-slate-950 placeholder:text-slate-900 text-slate-900" />
                  </div>
                  <div className="dropdown dropdown-end">
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                     <Link to={!cookie.acc_tokens ? "/login" : null}> <img src={cookie.acc_tokens ? "http://localhost:3001/Uploads/"+window.localStorage.getItem("img") : "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"} /> </Link>
                     </div>
                     
                     </label>
                     <div id="menuprofile">
                           {cookie.acc_tokens ? <ShowmenuP /> : null}
                     </div>
                  </div>
               </div>
            </div>
      </>
    );
}

export default NavBar;