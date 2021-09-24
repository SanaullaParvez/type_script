let myName: string = 'parvez'
let canSay: boolean = true
let rollNumber: number = 1118
const students: string[] = [];
type mixType = string| number | boolean
const mixed: (mixType)[] = [];
const circle = () => {
    console.log(Math.PI);
}
const calculateCircle = (diameter: number):number => {
    return diameter * Math.PI;
}
console.log(calculateCircle(3));
const aObject = {
    name: 'sanaulla',
    roll: 18
}
// Declare Variable in Object
let objectDeclare: object;
objectDeclare = aObject;
let anotherObject: {
    name: string,
    roll: number
}
anotherObject = {name: 'parvez',roll: 123}

// Signature of a Function
let summation: (a: number, b: number) => void	// Function Signature
summation = (firstNumber: number, secoundNumber: number, thirdNumber?:number, another:number = 20):void => {
    console.log(`Summation ${firstNumber+secoundNumber}`)
}
summation(10,20)
const subTract = (a:number, b:number):number => {
    return a-b;
}
console.log(`SubTraction: ${subTract(2,1)}`);
let logDetails: (obj: {name: string, age: number}) => void
type person = {name:string, age: number}
logDetails = (cObj: person) => {
    console.log(`${cObj.name} age is ${cObj.age}`);
}



// TypeCasting: To Informed TS that this is HTMLFormElement, then we can caall all of the forms attributes
const aForm = document.querySelector('form')!
console.log(aForm.href); // aForm is a HTML Element and href is Property of it.
// if(form){
//     console.log(form.html);
// }        It will not need if we use !(exclamation mark), that check Is 'form' exist in our HTML File

// TypeCasting
const bForm = document.querySelector('.item-form') as HTMLFormElement   // // Types for every DOM Element we use

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
    constructor(
        readonly client: string,
        private age: number
    ) {}

    format(){
        this.age = 30;
        return `${this.client} age is ${this.age}`
    }
}

const anPerson = new Person('Sanaulla',20)
const anotherPerson = new Person('Parvez',20)
let allPerson: Person[] = [anPerson,anotherPerson];
allPerson.forEach(person => {
    console.log(person.client)
    console.log(person.format());
})


// Interface

interface IsPerson {
    name: string;
    age: number;
    spend(a: number): void;
    speak(l: string): string;
}

// aPerson is Interfce->IsPerson type and all must have the came signature

const aPerson: IsPerson = {
    name: 'Parvez',
    age: 33,
    spend: (money: number) => {
        console.log(money)
    },
    speak: (language: string) => {
        return 'Bangla'
    }
}
const aPer = (secoundPerson: IsPerson) => {
    console.log('Hello', secoundPerson.name)
}
aPer(aPerson);




