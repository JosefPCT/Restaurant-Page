export class Menu{
    constructor(){

    }

    sayHi() {
        console.log("Hello I am the Menu class");
    }

    create() {
        const contentContainer = document.getElementById("content");
        
        const img = document.createElement("img");
        const heading = document.createElement("h2");
        const paragraph = document.createElement("p");

        heading.textContent = "The Perries's Menu"
        paragraph.textContent = "";

        contentContainer.appendChild(heading);
        contentContainer.appendChild(paragraph);
    }
}