import "./styles.css";
import { test } from "./greeting.js";
import { Home } from "./home.js"

const home = new Home;

console.log(test);
console.log("Initializing...");
console.log(home.sayHi());
console.log(home.create());