// #####        link:       http://csbin.io/jsb-functions




// CHALLENGE 1

let greetingPt1 = "Hello";

let greetingPt2 = "World";

greetingPt1 += " " + greetingPt2;

// console.log(greetingPt1 + ' ' + greetingPt2)
// console.log(`${greetingPt1} ${greetingPt2}`)
// console.log(greetingPt1)


function greeting () {
    let greetingPt1 = "Hello";
    let greetingPt2 = "World";

    return greetingPt1 + ' ' + greetingPt2;
};

// console.log(greeting());






// -----CHALLENGE 2-----


//Step 1
function createPartnerGreeting(name){
    
    // let partnerName = name;

    return `Hey, ${name}. It's great to work with you on these challenges!`;

};




//Step 2
// const partnerGreeting = createPartnerGreeting('Daniel');
// console.log(createPartnerGreeting('Daniel'));
// console.log(createPartnerGreeting('Bryan'));
// console.log(createPartnerGreeting('Diala'));





// -----CHALLENGE 3-----

function addTwo(num1, num2){
    return num1 + num2;
};

// console.log(addTwo(14,2));





// -----CHALLENGE 4-----

function arraySum(numbers){

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i];
    };

    return sum;
};

// console.log(arraySum([1,7,2,8,4,5,9,2,6,8])); // --> 52
// console.log(arraySum([1, 3, 14, 10000])); // --> 10018





// -----CHALLENGE 5-----

function arraySumEven(numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        
        if(numbers[i] % 2 == 0){
        
            sum = sum + numbers[i];
        
        };

    };
    
    return sum;

};

// console.log(arraySumEven([1,7,2,8,4,5,9,2,6,8])); //--> 30
// console.log(arraySumEven([1, 3, 27, 3, 5, 9])); // --> 0




// -----CHALLENGE 6-----

function stringCreator(array, strToRemove){
    
    let newString = '';

    for(let i = 0; i < array.length; i++){
    
        if(array[i] !== strToRemove){
            
            newString += array[i];

        };
    
    };

    return newString;
};

// console.log(stringCreator(["C", "q", "q", "o", "d", "q", "e", "q", "s", "m", "q", "i", "q", "t", "h", "q", "q"], "q")); // --> Codesmith
// console.log(stringCreator(["g", "g", "J", "S", "g", "B", " ", "g", "i", "s", "g", "g", " ", "s", "g", "u", "p", "e","g", "r", "g","g", " ", "a","g", "w", "e", "s","g", "o","g", "m", "e", "!","g","g", ], "g")); // --> JSB is super awesome!





// -----CHALLENGE 7-----

function lengthChecker(str, num){

    if(str.length >= num){
        
        return true;

    }else{

        return false;

    }

}

// console.log(lengthChecker('Codesmith', 12)) // --> false
// console.log(lengthChecker('Javascript', 10)) // --> true





// -----CHALLENGE 8-----

const valueChecker = function(object, string){
    if(object[string]){
        return object[string];
    }else{
        return `Sorry, "${string}" does not exist on the object`;
    }
}

const person1 = { "first name": "Phillip","last name": "Troutman", favFood: "ice cream"};
// console.log(valueChecker(person1, 'last name')); // --> "Troutman"
// console.log(valueChecker(person1, "age")); // --> 'Sorry, "age" does not exist on the object'





// -----CHALLENGE 9-----

function findWaldo (array){

    let waldoCount = 0;

    for(let i = 0; i < array.length; i++){

        if(array[i] == 'Waldo'){
            waldoCount++;
        };

    };

    if(waldoCount > 0){
        return `I found Waldo ${waldoCount} time(s)`;
    }else{
        return `Where\'s Waldo?!`;
    };

};




// -----CHALLENGE 10-----  ARROW FUNCTION
const squareNum =  (num) => {
    const result = num * num;
    return result;
  };
  

//Uncomment the line below to check your work!
// console.log(squareNum(2)); // --> 4
// console.log(squareNum(5)); // --> 25





// -----CHALLENGE 12-----

const myArray = [1,2,3,4,5,6,7,8,9,10];

const trim = (array) => {
    myArray.shift();    //TO REMOVE FROM THE BEGINNING OF THE ARRAY
    myArray.pop();      //TO REMOVE FROM THE END OF THE ARRAY

    console.log(myArray);
};


const addToBothEnds = (myArray, num1, num2) => {
    myArray.unshift(num1);
    myArray.push(num2);
    console.log(myArray);
};


const multipleAddToEnd = (array1, array2) => {
    myArray.push(array2);

    console.log(myArray);
};


//Uncomment the line below to check your work!

// trim(myArray); // --> [2, 3, 4, 5, 6, 7, 8, 9]
// trim(myArray); // --> [3, 4, 5, 6, 7, 8]
// addToBothEnds(myArray, 2, 9); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// addToBothEnds(myArray, 1, 10); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// multipleAddToEnd(myArray, [11,12,13,14,15]); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]



// -----CHALLENGE 13-----
const dogs = {
    Boxer: "loyal",
    Pug: "affectionate",
    Rottweiler: "protective",
    Shepherd: "courageous",
    Labrador: "intelligent"
};

const printValues = (dogs) => {
    console.log(object.values(dogs));
}

const printKeys = (dogs) => {
    console.log(object.keys(dogs));
}

