import React from "react";

function Footer(){
    var year = new Date();
    return(
        <footer>Copyright <span>$copy;</span> {year.getFullYear()} </footer>
    );
}

export default Footer;