import { useCookies } from "react-cookie";

function ShowmenuP() {
   const [cookie,setCookie] = useCookies(["acc_tokens"]);
   const removeStorageCookie = () => {
      setCookie("acc_tokens" , "");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("img");

      window.location.href = "/";
   }


   return ( 
      <>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content backdrop-blur-lg bg-sky-500 rounded-box w-52">
                                 <li className="backdrop-blur-lg">
                                    <a className="justify-between">
                                       Profile
                                       <span className="badge bg-yellow-400 text-black">New</span>
                                    </a>
                                 </li>
                                 <li><a>Settings</a></li>
                                 <li onClick={removeStorageCookie}><a>Logout</a></li>
            </ul>
      </>
    );
}

export default ShowmenuP;