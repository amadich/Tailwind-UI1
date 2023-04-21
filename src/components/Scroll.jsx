import { useEffect } from 'react';
import Montrav from '../db/traveling.json';
function Scroll() {
   useEffect(() => {
      Montrav.map((val,key) => {
         console.log(val.title);
      })
   },[])
   return ( 
      <>
           <section className="flex justify-around">

               {

                     Montrav.map((val,key) => {
                        return(
                           <>
                                       <div className=" w-80 h-40 bg-white flex justify-between">
                                          <div className="flex  w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${val.img})` }}></div>
                                          <div className="flex w-1/2 border border-black">
                                             <h1 className="font-bold m-3 ">
                                                {val.title} 
                                                <p className="text-gray-900 text-xs">{val.prix}</p>
                                                <h6 className="text-xs/[12px] text-gray-500 font-monospace">
                                                   {val.disc}
                                                </h6>
                                             </h1> 
                                             
                                             </div>
                                       </div>
                           </>
                        )
                     })
                 
               }

           

            
           </section>
      </>
    );
}

export default Scroll;