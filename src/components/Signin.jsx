import { useState } from "react";
import Axios from "axios";
import {useCookies} from 'react-cookie';

function Signin() {
      const [_,setCookie] = useCookies(["acc_tokens"]);
      const [email,setEmail] = useState("");   
      const [pwd,setPwd] = useState("");

      const handsubmit = (e) => {
         e.preventDefault();
         const serverURL = 'http://localhost:3001';
         Axios.post(`${serverURL}/login`, {email,pwd})
         .then((response) => {
               if (response.data.ok != 0) {
                  setCookie("acc_tokens",response.data.token);
                  window.localStorage.setItem("token", response.data.token);
                  window.localStorage.setItem("user", response.data.Accunet.user);
                  window.localStorage.setItem("email", response.data.Accunet.email);
                  window.localStorage.setItem("img", response.data.Accunet.img);
                  console.log(response.data);

                  window.location.href = "/";
               }

               else {
                  console.log(response.data);
               }
         })
      }

   return ( 
      <>
               <form onSubmit={handsubmit}>
                       
                        <label className="block font-bold ml-3 pt-3">Email</label>
                        <input className="block pl-5 ml-3 rounded-lg p-1 outline-none border border-stone-700 w-60 duration-300 hover:w-80 bg-transparent placeholder:text-gray-50 " type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                        <label className="block font-bold ml-3 pt-3">Password</label>
                        <input className="block pl-5 ml-3 rounded-lg p-1 outline-none border border-stone-700 w-60 duration-300 hover:w-80 bg-transparent placeholder:text-gray-50 " type="password" placeholder="Password" onChange={(e) => {setPwd(e.target.value)}}/>
                           

                        <input className="border border-amber-400 rounded-lg bg-amber-400 font-bold m-3 w-40 h-10 cursor-pointer duration-200 hover:bg-amber-300" type="submit" value="Login"/>


                        <div className="form-control">
                           <label className="label cursor-pointer">
                              <span className="label-text font-medium text-black">Remember me</span> 
                             
                              <input type="checkbox" className="toggle toggle-accent mr-40" />
                           </label>
                        </div>

                  </form>
      </>
    );
}

export default Signin;