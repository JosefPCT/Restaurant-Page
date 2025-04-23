import "./styles.css";
import { test } from "./greeting.js";
import { Home } from "./home.js"

const home = new Home;

console.log(test);
console.log("Initializing...");
console.log(home.sayHi());
console.log(home.create());

const buttons = document.querySelectorAll("button");
const contentContainer = document.getElementById("content");

buttons.forEach((button) => {
    button.addEventListener("click", tabSwitch);
});

function tabSwitch(e){
    console.log(e.target.id);

    if(e.target.id === "home"){
        console.log("removing div#content contents...");
        contentContainer.innerHTML = "";
        console.log("creating home page");
        home.create();    
    }
}