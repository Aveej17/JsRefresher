// var name  = 'Max';


// let name = 'Max';

// create constant
const name = "Max";


// get error at a run time
// name = "Maxwell";

// console.log(name);

// var age = 29;
let age = 29;

age = 30;

// var hasHobbies = true;
let hasHobbies = true;



function summarizeUser(userName, userAge, userHasHobby){
    return ("Name is "+ userName+ ", "+
        "age is "+ userAge+", "+
        "and user has hobbies : "+userHasHobby);
}


console.log(summarizeUser(name, age, hasHobbies));


// Ananymous funtion
// const SummarizeUser = function (userName, userAge, userHasHobby){
//     return ("Name is "+ userName+ ", "+
//         "age is "+ userAge+", "+
//         "and user has hobbies : "+userHasHobby);
// }

const SummarizeUser = (userName, userAge, userHasHobby) =>{
    return ("Name is "+ userName+ ", "+
        "age is "+ userAge+", "+
        "and user has hobbies : "+userHasHobby);
}

console.log(SummarizeUser(name, age, hasHobbies));



const person = {
    name : "Max",
    age: 29,

    greet(){
        console.log("Hi, I am " + this.name);
    }

    // greet: function(){
    //     console.log("Hi, I am " + this.name);
    // }
};

console.log(person);
person.greet();