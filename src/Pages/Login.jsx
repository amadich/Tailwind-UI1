import { useCookies } from "react-cookie";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { useState } from "react";

function Login() {
  const [cookie,setCookie] = useCookies(["acc_tokens"]);
  cookie.acc_tokens ? window.location.href = "/" : null
  const [isSignIn, setIsSignIn] = useState(true);

  const showSignIn = () => {
   let x = document.getElementById("psignup").style.display = "block";
   let y = document.getElementById("psignin").style.display = "none";
    setIsSignIn(true);
  };

  const showSignUp = () => {
    let x = document.getElementById("psignup").style.display = "none";
    let y = document.getElementById("psignin").style.display = "block";
    setIsSignIn(false);
  };

  return (
    <>
      <NavBar />
      <div className="w-1/2 m-auto h-96 flex justify-between mt-40 backdrop-blur rounded-lg">
        <div className="w-1/2  border-black h-full rounded-lg">
          {isSignIn ? <Signin /> : <Signup />}
          <p
            id="psignup"
            className="m-3 text-gray-100 cursor-pointer"
            onClick={showSignUp}
          >
            Create Account?
          </p>
          <p
            id="psignin"
            className="m-3 text-gray-100 cursor-pointer hidden"
            onClick={showSignIn}
          >
            Sign In
          </p>
        </div>
        <div
          className="w-1/2 h-full flex rounded-xl border-black bg-[url('./assets/Default_A_Vietnamese_girl_in_a_light_blue_floral_Ao_dai_walkin.jpg')] bg-cover bg-center"
          alt=""
        ></div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
