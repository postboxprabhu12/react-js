import React from "react";

function Footer(){
    var year = new Date();
    return (
        <footer>Copyright $copy; {year.getFullYear()} by Prabhu</footer>
    );
};

export default Footer;