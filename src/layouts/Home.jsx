import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { Navigate } from 'react-router'

const Home = () => {

    const naviGate = useNavigate();
    const shouldRedirect = true;

    function handleBtnClick() {
        console.log("Button clicked");
        naviGate("/dashboard", {
            replace : true
        });
    }

    if(shouldRedirect) {
        <Navigate to={"/dashboard"} />
    }

  return (
    <div>
        <nav>
            <Link to={"/login"} state={{name : "John Doe"}}>
               Login
            </Link>
            <Link to={"/about"}>About</Link>
        </nav>
        <button className="bg-blue-500 text-white cursor-pointer" onClick={handleBtnClick}>
            Click to send somewhere
        </button>
    </div>
  )
}

export default Home