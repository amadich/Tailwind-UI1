import { Link } from "react-router-dom";
import Scroll from "./Scroll";

function Article() {
   return ( 
      <>
            <article className="mt-60">
               <h1 className="text-gray-100 w-1/2  text-4xl tracking-wider m-10">
               Raise your banner high and inspire your allies to defeat the ravenous piglins and save the Overworld! Minecraft Legends is available now.
               </h1>
               <h4 className="text-yellow-100 w-1/2 m-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id hic vero earum mollitia vitae atque excepturi quidem dolorum dolor nihil nesciunt exercitationem eos tempora maxime, porro quaerat illum reprehenderit ullam?
               </h4>

               <div className="m-10">
                  <Link to="/login"><button className="backdrop-blur-lg bg-slate-400 rounded-lg w-52 hover:w-60 h-12 text-xl hover:bg-orange-400 duration-300 font-medium">  Set The Date  </button></Link>
               </div>

            </article>

            <Scroll />
      </>
    );
}

export default Article;