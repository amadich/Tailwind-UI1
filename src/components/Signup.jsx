import { useState } from "react";
import Axios from "axios";
import {useCookies} from 'react-cookie';

function Signup() {

      const [user,setUser] = useState("");
      const [email,setEmail] = useState("");
      const [pwd,setPwd] = useState("");
      const [file,setFile] = useState(null);
      const [_,setCookie] = useCookies(["acc_tokens"]);

      const handsubmit = (e) => {
         e.preventDefault();
         const serverURL = 'http://localhost:3001';
         Axios.post(`${serverURL}/upload`, {file:file} , { 
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => {
            const fileName = res.data.fileName;
            Axios.post(`${serverURL}/rej`,{user,email,pwd,img:fileName})
            .then((response) => {
               setCookie("acc_tokens",response.data.token);
               window.localStorage.setItem("token", response.data.token);
               window.localStorage.setItem("user", response.data.user);
               window.localStorage.setItem("email", response.data.email);
               window.localStorage.setItem("img", response.data.img);
               console.log(response.data);

               window.location.href = "/";

            })
          })
      }

   return ( 
      <>
               <form onSubmit={handsubmit}>
                        <label className="block font-bold ml-3 pt-3">Username</label>
                        <input className="block pl-5 ml-3 rounded-lg p-1 outline-none border border-stone-700 w-60 duration-300 hover:w-80 bg-transparent placeholder:text-gray-50 " type="text" placeholder="Username" onChange={(e) => {setUser(e.target.value)}}/>
                        <label className="block font-bold ml-3 pt-3">Email</label>
                        <input className="block pl-5 ml-3 rounded-lg p-1 outline-none border border-stone-700 w-60 duration-300 hover:w-80 bg-transparent placeholder:text-gray-50 " type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                        <label className="block font-bold ml-3 pt-3">Password</label>
                        <input className="block pl-5 ml-3 rounded-lg p-1 outline-none border border-stone-700 w-60 duration-300 hover:w-80 bg-transparent placeholder:text-gray-50 " type="password" placeholder="Password" onChange={(e) => {setPwd(e.target.value)}}/>
                           <label className="block font-sm ml-3 pt-3 text-slate-50">Select Profile Image : </label>
                           <input type="file" className="m-3 file:border file:rounded-lg file:text-white file:border-purple-600 file:bg-transparent file:bg-purple-600 file:duration-300 file:cursor-pointer file:hover:bg-purple-400" onChange={(e) => {setFile(e.target.files[0])}}/>


                              <input className="border border-amber-400 rounded-lg bg-amber-400 font-bold m-3 w-40 h-10 cursor-pointer duration-200 hover:bg-amber-300" type="submit" value="Create New User"/>

                              

                     </form>
      </>
    );
}

export default Signup;