import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
    return (
        <>
            <div>
                <h1>Home</h1>
                <Link to="/restaurants">
                    <button> Go to restaurants</button>
                </Link>
            </div>
        </>
    );
}

export default HomePage;
