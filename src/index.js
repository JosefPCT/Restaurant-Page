import "./styles.css";
import { test } from "./greeting.js";
import { Home } from "./home.js"
import { Menu } from "./menu.js";
import { About } from "./about.js";

const home = new Home;
const menu = new Menu;
const about = new About;


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

    if(e.target.id === "menu"){
        console.log("removing div#content contents...");
        contentContainer.innerHTML = "";
        console.log("creating menu page");
        menu.create();    
    }

    if(e.target.id === "about"){
        console.log("removing div#content contents...");
        contentContainer.innerHTML = "";
        console.log("creating about page");
        about.create();    
    }
}