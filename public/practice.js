"use strict";
let myName = 'parvez';
let canSay = true;
let rollNumber = 1118;
const students = [];
const mixed = [];
const circle = () => {
    console.log(Math.PI);
};
const calculateCircle = (diameter) => {
    return diameter * Math.PI;
};
console.log(calculateCircle(3));
const aObject = {
    name: 'sanaulla',
    roll: 18
};
// Declare Variable in Object
let objectDeclare;
objectDeclare = aObject;
let anotherObject;
anotherObject = { name: 'parvez', roll: 123 };
// Signature of a Function
let summation; // Function Signature
summation = (firstNumber, secoundNumber, thirdNumber, another = 20) => {
    console.log(`Summation ${firstNumber + secoundNumber}`);
};
summation(10, 20);
const subTract = (a, b) => {
    return a - b;
};
console.log(`SubTraction: ${subTract(2, 1)}`);
let logDetails;
logDetails = (cObj) => {
    console.log(`${cObj.name} age is ${cObj.age}`);
};
// TypeCasting: To Informed TS that this is HTMLFormElement, then we can caall all of the forms attributes
const aForm = document.querySelector('form');
console.log(aForm.href); // aForm is a HTML Element and href is Property of it.
// if(form){
//     console.log(form.html);
// }        It will not need if we use !(exclamation mark), that check Is 'form' exist in our HTML File
// TypeCasting
const bForm = document.querySelector('.item-form'); // // Types for every DOM Element we use
// Access Modifier
// Readonly: Can't change the value But Call the value from inner and outer.
// Private: Can change the value only innerClass And call the value only from inner.
// Public: Can do anything.
// import {Invoice} from './Invoice'
class Person {
    // public client: string;
    // private age: number;
    //
    // constructor(c: string, a: number) {
    //     this.client = c;
    //     this.age = a;
    // }
    ////////////////////  OR
    constructor(client, age) {
        this.client = client;
        this.age = age;
    }
    format() {
        this.age = 30;
        return `${this.client} age is ${this.age}`;
    }
}
const anPerson = new Person('Sanaulla', 20);
const anotherPerson = new Person('Parvez', 20);
let allPerson = [anPerson, anotherPerson];
allPerson.forEach(person => {
    console.log(person.client);
    console.log(person.format());
});
// aPerson is Interfce->IsPerson type and all must have the came signature
const aPerson = {
    name: 'Parvez',
    age: 33,
    spend: (money) => {
        console.log(money);
    },
    speak: (language) => {
        return 'Bangla';
    }
};
const aPer = (secoundPerson) => {
    console.log('Hello', secoundPerson.name);
};
aPer(aPerson);
