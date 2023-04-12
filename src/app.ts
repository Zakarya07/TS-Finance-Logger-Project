import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Form
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// List template instance
const UL = document.querySelector("ul")!;

const list = new ListTemplate(UL);

form.addEventListener("submit", e => {
    e.preventDefault();

    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

   if (tofrom.value === "" || details.value === ""  || amount.value === "") {
    alert("You have to fill all the fields before submitting");
   } else {
    let doc : HasFormatter;

    if (type.value === "invoice") {
        if (amount.value === "") {
            amount.valueAsNumber = 0;
        }
        doc = new Invoice(...values);
        tofrom.value = "";
        details.value = "";
        amount.value = "";
    } else {
        if (amount.value === "") {
            amount.valueAsNumber = 0;
        }
        doc = new Payment(...values);
        tofrom.value = "";
        details.value = "";
        amount.value = "";    }

    list.render(doc, type.value, "end");
   }

})