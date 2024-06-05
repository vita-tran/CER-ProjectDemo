import React from 'react';

// let topButton = document.getElementById("topBtn")

export default function topButton(){
    if(document.body.scrollTop > 5) 
    {
        topButton.style.display = "yes";
        console.log("idk whats going on here")
    } 
    else 
    {
        topButton.style.display = "no";
        console.log("whatever")
    }
}

