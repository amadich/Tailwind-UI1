import Header from "../components/Header";

function Login() {
   return ( 
      <>
         <Header  />
            <div className=" w-1/2 m-auto h-96 flex justify-between mt-40 backdrop-blur rounded-lg">
               <div className="w-1/2  border-black h-full rounded-lg">

                     <form>
                        <label className="block font-bold ml-3 pt-3">Username</label>
                        <input className="block pl-5 ml-3 rounded-lg p-1 outline-none border border-stone-700 w-60 duration-300 hover:w-80 bg-transparent placeholder:text-gray-50 " type="text" placeholder="Username"/>
                        <label className="block font-bold ml-3 pt-3">Email</label>
                        <input className="block pl-5 ml-3 rounded-lg p-1 outline-none border border-stone-700 w-60 duration-300 hover:w-80 bg-transparent placeholder:text-gray-50 " type="text" placeholder="Email"/>
                        <label className="block font-bold ml-3 pt-3">Password</label>
                        <input className="block pl-5 ml-3 rounded-lg p-1 outline-none border border-stone-700 w-60 duration-300 hover:w-80 bg-transparent placeholder:text-gray-50 " type="password" placeholder="Password"/>
                           <label className="block font-sm ml-3 pt-3 text-slate-50">Select Profile Image : </label>
                           <input type="file" className="m-3 file:border file:rounded-lg file:text-white file:border-purple-600 file:bg-transparent file:bg-purple-500 file:duration-300 file:cursor-pointer file:hover:bg-purple-400" />


                              <input className="border border-amber-400 rounded-lg bg-amber-400 font-bold m-3 w-40 h-10 cursor-pointer duration-200 hover:bg-amber-300" type="submit" value="Create New User"/>

                     </form>

               </div>
               <div className="w-1/2 h-full flex rounded-xl border-black  bg-[url('./assets/Default_A_Vietnamese_girl_in_a_light_blue_floral_Ao_dai_walkin.jpg')] bg-cover bg-center"></div>
            </div>
            
      </>
    );
}

export default Login;