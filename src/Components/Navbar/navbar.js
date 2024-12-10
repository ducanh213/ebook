import React from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";
import { ROUTER } from "../../Utils/router";
export const NavBar  = (props) => {
    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to={ROUTER.USER.HOME}>Trang chủ /</Link> 
                    {/* &gt; */}
                </li>
                <li><Link to={props.router}>{props.name}{props.search?" / " :""}</Link></li>
                <li>{props.search}</li>
            </ul>
        </div>
    )
}