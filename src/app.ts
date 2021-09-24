import {Payment} from "./classes/Payment.js";
import {Invoice} from "./classes/Invoice.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";

let form = document.querySelector('.new-item-form') as HTMLFormElement
let type = document.querySelector('#type') as HTMLSelectElement;
let toFrom = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if (type.value === 'Payment')
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    else
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)

    console.log(doc);

    // let anArray: any = [type.value,toFrom.value,details.value,amount.value]
    // console.log(anArray)
})