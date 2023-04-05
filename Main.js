import React from "react";
import HomePage from "./Home";
import LibraryPage from "./Library";
import About from "./About";
import Store from "./Store";

export default function Main(){
    return(
        <div>
        <HomePage/>
        <LibraryPage/>
        <Store/>
        <About/>
        </div>
    )
}