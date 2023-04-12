import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {

    constructor(private container:HTMLUListElement){}

    render(item : HasFormatter, heading: string, pos: "start" | "end") {

        const li = document.createElement("li");
        const h4 = document.createElement("h4");
    
        h4.innerText = heading;
        li.append(h4);
        
        const paragraph = document.createElement("p");
        paragraph.innerText = item.format();

        li.append(paragraph);

        if (pos === "start") {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }

    }

}