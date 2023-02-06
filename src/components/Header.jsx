import React from "react";

let Header=()=>{
    return(
        <nav>
            <NavContent/>
        </nav>
    );
}

const NavContent=()=>{
    return(
        <>
            <h2>Dhiraj Rai.</h2>
            <div>
                <a href="#home">Home</a>
                <a href="#work">Work</a>
                <a href="#timeline">Experience</a>
                <a href="#service">Service</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#contact">Contact</a>
            </div>
            <a href="mailto:dk194945@gmail.com">
                <button>Email</button>
            </a>
        </>
    );
}
export default Header;