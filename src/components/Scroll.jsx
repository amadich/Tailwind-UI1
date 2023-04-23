import { useEffect } from 'react';
import Montrav from '../db/traveling.json';
function Scroll() {

   return ( 
      <>
           <section className="flex justify-around" >

               {

                     Montrav.map((val,key) => {
                        return(
                           <>
                                       <div  className=" w-80 h-40 bg-white flex justify-between" key={key}>
                                          <div className="flex  w-1/2 bg-cover bg-center"  style={{ backgroundImage: `url(${val.img})` }}></div>
                                          <div className="flex w-1/2 ">
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