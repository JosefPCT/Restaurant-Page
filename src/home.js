export class Home{
    constructor(){

    }

    sayHi() {
        console.log("Hello I am the Home class");
    }

    create() {
        const contentContainer = document.getElementById("content");
        
        const img = document.createElement("img");
        const heading = document.createElement("h2");
        const paragraph = document.createElement("p");

        heading.textContent = "The Perries"
        paragraph.textContent = "The perries was created by Perry on 1995, It offers high quality barbequed foods..."

        contentContainer.appendChild(heading);
        contentContainer.appendChild(paragraph);
    }
}