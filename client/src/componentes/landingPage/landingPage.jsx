import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return (
        <div>
            <Link to="/countries">
                <button>Home</button>
            </Link>
        </div>
    )
}