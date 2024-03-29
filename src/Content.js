import React from "react";

function Content() {
    function family() {
        var name = ["prabhu", "inbha", "malar"];
        var cal = Math.floor(Math.random() * 3);
        return name[cal];
    }
    return(
        <p>This is My Family Menber list of one by one : {family()}</p>
    );
}


export default Content;