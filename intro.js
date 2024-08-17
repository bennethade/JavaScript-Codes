//////=====LINK:  http://csbin.io/jsb-variables-data-types   =======//////



// -----CHALLENGE 1-----
// console.log('Hi Dan');



  // STEP 1
//This is a comment that won't be executed like regular Javascript code


  // STEP 2
/*This is a multiline comment that also won't be executed like regular Javascript code!!!"*/



  // -----CHALLENGE 2-----


  // STEP 1
  const eyeColor = "white";
  let hairColor = "black";
  
  // console.log(eyeColor);
  // console.log(hairColor)
  
  
    // STEP 2
  hairColor = "gray";
  
  // console.log(hairColor)
  // eyeColor = "blue";
  // console.log(eyeColor)
  
  
  
    // -----CHALLENGE 3-----
  
  
    // STEP 1
  let fName = 'Benneth';
  let lName = "Nyekefamo";
  let favShow = "Far From Home";
  
  // console.log(fName + ' ' + lName + ' is ' + favShow)
  
  
    // STEP 2
  let greeting;
  greeting = "Good afternoon";
  
  // console.log(greeting + ' ' + fName + ' ' + lName)
  
  
    // STEP 3 (Bonus Step)
  let fancyGreeting;
  fancyGreeting = `Hello,`
  let fancyGreeting2 = `How are you?` //This string usage is called backticks
  
  // console.log(`${fancyGreeting} ${fName} ${lName}, ${fancyGreeting2}`)
  //The above line usage is called template literals (${fName})
  
  
  
  // -----CHALLENGE 4-----
    
    // STEP 1
  let favNumber = 30;
  let randomNumber = 7;
  
  
    // STEP 2
  let sum = favNumber + randomNumber;
  let product = favNumber * randomNumber;
  let difference = randomNumber - favNumber;
  
  // console.log(sum)
  // console.log(product)
  // console.log(difference)
  
  
    // STEP 3 (Bonus Step)
  let remainder = favNumber%randomNumber;
  
  // console.log(remainder)
  
  
  // -----CHALLENGE 5-----
  
    // STEP 1
  let favSnacks = ['fanta', 'sprite', 'zobo', 'yoghurt', 'malt'];
  
  // console.log(favSnacks)
  // console.log(favSnacks.length)
  // console.log(favSnacks[1])
  
  
    // STEP 2
  let favAnimals = ['monkey', 'cat', 'dog', 'elephant', 'donkey', 'snake'];
  
  // console.log(favAnimals);
  // console.log(favAnimals.length);
  // console.log(favAnimals[0]);
  
  
    // STEP 3 (Bonus Step)
  let lastItem = favAnimals[favAnimals.length-1];
  
  // console.log(lastItem);
  
  
  
  
  // -----CHALLENGE 6-----
  
  
    // STEP 1
  let person = {
    fName : "Benneth"
  }
  
  console.log(person)
  
  
    // STEP 2
  person.favColor = "White";
  
  console.log(person.favColor);
  
  
    // STEP 3 
  person['likes to code'] = true;
  console.log(person['likes to code']);
  
  
    
    // STEP 4 (Bonus Step)
  person.siblings = {
    brothers : 2,
    sisters : 5
  };
  console.log(person.siblings.brothers);
  console.log(person.siblings.sisters);