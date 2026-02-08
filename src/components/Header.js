import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";

const Header  = () => {
    console.log("Header Rendered");

    const [btnName, setBtnName] = useState("Login");

    useEffect(() => {
        console.log("useEffect in Header");
    },[btnName])

    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Contact </li>
                    <li> Cart </li>
                    <button onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")} className="login-btn">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;