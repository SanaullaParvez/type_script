import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
let form = document.querySelector('.new-item-form');
let type = document.querySelector('#type');
let toFrom = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'Payment')
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    else
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
    // let anArray: any = [type.value,toFrom.value,details.value,amount.value]
    // console.log(anArray)
});
