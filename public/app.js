import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// Form
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// List template instance
const UL = document.querySelector("ul");
const list = new ListTemplate(UL);
form.addEventListener("submit", e => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (tofrom.value === "" || details.value === "" || amount.value === "") {
        alert("You have to fill all the fields before submitting");
    }
    else {
        let doc;
        if (type.value === "invoice") {
            if (amount.value === "") {
                amount.valueAsNumber = 0;
            }
            doc = new Invoice(...values);
            tofrom.value = "";
            details.value = "";
            amount.value = "";
        }
        else {
            if (amount.value === "") {
                amount.valueAsNumber = 0;
            }
            doc = new Payment(...values);
            tofrom.value = "";
            details.value = "";
            amount.value = "";
        }
        list.render(doc, type.value, "end");
    }
});
