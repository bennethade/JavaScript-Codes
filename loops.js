// /////####   LINK ====  http://csbin.io/jsb-loops





// -----CHALLENGE 1-----
let counter =0;
counter++;

// console.log(counter)

while(counter < 10)
    {
        counter++;
        // console.log(counter);
    }


let anotherCounter = 0;

while(anotherCounter < 10)
    {
        anotherCounter++;
    }
    // console.log(anotherCounter)





// -----CHALLENGE 2-----
let bigNumber = 100;
let smallNumber = 5;

while(bigNumber > smallNumber)
    {
        bigNumber--;
    }

// console.log(bigNumber, smallNumber);





// -----CHALLENGE 3-----

let fundsAvailable = 100;
let giftPrice = 15;
let numberOfGiftsPurchased = 0;
let overBudget = false;

while(overBudget !== true)
    {
        numberOfGiftsPurchased++;
        
        fundsAvailable -= giftPrice;

        if(fundsAvailable < giftPrice)
            {
                overBudget = true;
            };
    };

// console.log(fundsAvailable, numberOfGiftsPurchased)





// -----CHALLENGE 4-----
let myArray = [1,7,3,8];

let myArrayIndexes = 0;

while(myArrayIndexes < myArray.length)
    {
        // console.log(myArray[myArrayIndexes]);

        myArrayIndexes++;
    }







// -----CHALLENGE 5-----

let anotherArray = [86, 75, 30, 9];

for (let i = 0; i < anotherArray.length; i++)
    {
        // console.log(anotherArray[i]);
    }







// -----CHALLENGE 6-----

let randomNums = [2, 9, 4, 8, 5, 3, 7, 11, 1, 6, 12]

let overFive = 0;

let count = 0;

for (let i = 0; i < randomNums.length; i++)
    {
        if(randomNums[i] > 5)
            {
                overFive = randomNums[i];

                // console.log(overFive);

                count++;
            }
    }

// console.log(`The count of numbers above 5 is ${count} `);







// -----CHALLENGE 7-----

let favLanguage = "javascript";

let aTotal = 0;

for (let i = 0; i < favLanguage.length; i++)
    {
        if (favLanguage[i] === 'a')   
            {
                aTotal++;
            }
    }

// console.log(aTotal);







// -----CHALLENGE 8-----

const messyMessage = [6, 3,'j',1, 3, 's', 5, 9, 2,'b', ' ', 3, 3, 'i', 's', 7, 0, ' ', 2, 'f', 1, 1, 1, 'u', 'n', 4, '!'];

let cleanMessage = ' ';

for (let i = 0; i < messyMessage.length; i++){

    if (typeof messyMessage[i] === 'string'){

        cleanMessage += messyMessage[i];

    };
    
};

console.log(cleanMessage);







