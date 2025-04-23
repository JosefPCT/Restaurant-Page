export class About{
    constructor(){

    }

    sayHi() {
        console.log("Hello I am the About class");
    }

    create() {
        const contentContainer = document.getElementById("content");
        
        const img = document.createElement("img");
        const heading = document.createElement("h2");
        const paragraph = document.createElement("p");

        heading.textContent = "All About: The Perries"
        paragraph.textContent = "";

        contentContainer.appendChild(heading);
        contentContainer.appendChild(paragraph);
    }
}