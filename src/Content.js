import React from "react";


function Content() {


    function Family() {
        var name = ["prabhu", "inbha", "malar"];
        var cal = Math.floor(Math.random() * 3);
        return name[cal];
    }
    return (
        <main>
            <p>This is my Family Member it Show on One by One :<b> {Family()}</b></p>
        </main>
    );
}

export default Content;