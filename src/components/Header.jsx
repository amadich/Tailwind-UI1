import Logo from '../assets/7459344.png';
function Header() {
   return ( 
      <>
               <header className="fixed flex w-full items-center justify-around backdrop-blur-lg m-auto top-0">
                  <div id="logo" className="ml-5 font-medium text-gray-100 underline cursor-none">
                     <img src={Logo} width={150}/>
                     </div>
                  <ul className="inline-flex">
                     <li>Home</li>
                     <li>About</li>
                     <li>Contact</li>
                     <li>Services</li>
                  </ul>
                  
               </header>
      </>
    );
}

export default Header;