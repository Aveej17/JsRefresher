const person = {
    name : "Max",
    age: 29,

    greet(){
        console.log("Hi, I am " + this.name);
    }

    // this is undifined
    // greet: function(){
    //     console.log("Hi, I am " + this.name);
    // }
};


// understanding destructuring
const printName = ( { name } ) =>{
    console.log(name);
}

printName(person);





const hobbies = ["Sports", "Cooking"];

// refreshing array destructuring
const [hobby1, hobby2] = hobbies;
console.log("Hobby 1: "+ hobby1);

// for(let hobby of hobbies){
//     console.log(hobby);
// }

// creates a new array
console.log(hobbies.map(hobby => "Hobby: " +hobby));

// verification
console.log(hobbies);


hobbies.push("Programming");

console.log(hobbies);


const copiedArray = hobbies.slice();
copiedArray.push("Fishing");
console.log(copiedArray);
console.log(hobbies);

// spreat operators
const copyUsingSpreatOperator = [...hobbies];
copyUsingSpreatOperator.push("Playing Video Games");
console.log(copyUsingSpreatOperator);
console.log(hobbies);

// Spreat operator works for objects as well



// rest opertor
console.log("Rest Operator understanding");
const toArray = (arg1, arg2, arg3) =>{
    return [arg1, arg2, arg3];
}

console.log("without rest operator");
console.log(toArray(1, 2, 3, 4));
// prints [1,2,3]  No flexibility


const toArraywithrest = (...args) =>{
    return [...args];
}

console.log("with rest operator");
console.log(toArraywithrest(1, 2, 3, 4));
// prints [1,2,3,4]
