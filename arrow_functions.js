// #####        link:       http://csbin.io/jsb-functions



const subtractBy2 = (num) => {
    return num - 2 ;
};


//ARROW FUNCTION ON A SINGLE LINE WITH A SINGLE PARAMETER (NUM)
const subtractBy3 = num => num - 3;


const output = subtractBy2(5);

const anotherOutput = subtractBy3(7);

console.log(output, anotherOutput);




/////// FUNCTION
let myArray = [1,2,3];

function addToEndOfArray(array, elementToInsert){
    
    const endOfArray = array.length;

    array[endOfArray] = elementToInsert;

    return array;
};

myArray = addToEndOfArray(myArray, 4);




const ourArray = [1,2,3,4];

ourArray.push(5);
console.log(ourArray);

ourArray.pop();
console.log(ourArray);

ourArray.unshift(0);
console.log(ourArray);

ourArray.shift();
console.log(ourArray);
