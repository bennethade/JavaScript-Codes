//////=====LINK:   http://csbin.io/jsb-operators-control-flow




// -----CHALLENGE 1-----


  // STEP 1
  let favNumber = 16;

  const comp1 = favNumber < 22;
  
  const comp2 = favNumber > 4;
  
  const comp3 = favNumber >= 21;
  
  const comp4 = favNumber <= 8;
  
  // console.log(comp1, comp2, comp3, comp4)
  
  
  
  
    // STEP 2
  
  const name = "Benneth";
    
  
  let comp5, comp6, comp7, comp8;
  
    
    // STEP 3
  
  comp5 = "5" == 5;
  
  comp6 = name === "Maria";
  
  comp7 = "cat" != 6
  
  comp8 = "8" !== 8;
  
  
    
    // STEP 4
  // console.log(comp5, comp6, comp7, comp8)
  
  
  
  // -----CHALLENGE 2-----
  
  // VARIABLE GLOSSARY
  const superManIsTheBestSuperHero = true; // 🦸
  const batManIsTheBestSuperHero = false; // literally, no super powers 🙄
  const gameOfThronesSeason8WasTerrible = true; // like really true
  const androidIsSuperiorToApple = false; // come at me 🤷
  const greatTVShow = 'The Office';
  const notSoGreatTVShow = 'How I Met Your Mother'; 
  const bestPetToOwn = 'dog';
  const notBestPetToOwn = 'cat'; // I love all pets. Just cats a bit less than dogs ... sorry 😬😅
  const bestTypeOfFood = 'Hispanic'; // 🌮🌮🌮
  const bestMusic = undefined; // always different for me 💁
  
  
    // STEP 1
  let value1 = (superManIsTheBestSuperHero && gameOfThronesSeason8WasTerrible);
  
  let value2 = (superManIsTheBestSuperHero && greatTVShow);
  
  // console.log(value2)
  
  
    // STEP 2
  let value3 = (batManIsTheBestSuperHero || androidIsSuperiorToApple);
  
  let value4 = (notSoGreatTVShow || androidIsSuperiorToApple);
  
  
  
    // STEP 3
  let value5 = (!androidIsSuperiorToApple);
  
  let value6 = (!superManIsTheBestSuperHero);
  
  
  // console.log(value1, value2, value3, value4, value5, value6)
  
  
    // STEP 4 (Bonus Step)
  let guest = [];
  
  // console.log(guest)
  
  guest = {
    name:"Benard",
    age: 29,
    "has identification": true,
    "identification is real": true,
    "face matches identification": true  
    
  }
  
  
  const nameToBeAddedToTheGuestList = guest.age >= 21 && guest["has identification"] && guest["identification is real"] && guest["face matches identification"] && guest.name || `Sorry, ${guest.name} you're not getting into the event.`
  
  // console.log(nameToBeAddedToTheGuestList)
  
  
  
  // -----CHALLENGE 3-----
  
  
    // STEP 1
  const num = 0;
  
  
    // STEP 2
  
  // if(num > 0){
  //   console.log(`It's positive`)
  // }
  // if(num < 0){
  //   console.log(`it's negetive`)
  // }
  // if(num === 0){
  //   console.log(`It's zero`)
  // }
  
  
    // STEP 3
    // Refactor above
  // if(num > 0){
  //   console.log(`It's positive`)
  // }
  // else if(num < 0){
  //   console.log(`it's negetive`)
  // }
  // else if(num === 0){
  //   console.log(`It's zero`)
  // }
  
  
    // STEP 4
    // Refactor above
  // if(num > 0){
  //   console.log(`It's positive`)
  // }
  // else if(num < 0){
  //   console.log(`it's negetive`)
  // }
  // else{
  //   console.log(`It's zero`)
  // }
  
  
  
  // -----CHALLENGE 4-----
  
  
    // STEP 1
  const temperature = 65;
  
  let kindOfDay;
  
  
    // STEP 2
  
  // if(temperature > 98){
  // 	kindOfDay = `super hot`;
  //   console.log(`I'm staying inside next to the AC`);
  // }
  
  // else if(temperature > 84){
  //   kindOfDay = "a little warm";
  //   console.log(`I'll head out for a bit, but I'm wearing shorts`);
  // }
  
  
  // else if(temperature > 69){
  //   kindOfDay = "perfect";
  //   console.log(`It's perfect outside. I think I'll go to the park`);
  // }
  
  // else if(temperature > 54){
  //   kindOfDay = "chilly";
  //   console.log(`I'd better bring a jacket`);
  // }
  
  // else {
  //   kindOfDay = "freezing";
  //   console.log(`Heck no! I'm staying inside where it's warm`);
  // }
  
  // if(kindOfDay){
  //   console.log(`Looks like it's going to be ${kindOfDay} today`);
  // }
  
  
  
  
  
  
  // -----CHALLENGE 5 (Bonus Challenge 😮) -----
  
  const value7 = true;
  const value8 = false;
  const value9 = "6";
  const value10 = "cat";
  const value11 = 0;
  
  
  // -----Uncomment The Below Lines Of Code-----
  if(value7){
    
      console.log('a');
      
  }
    
  if (!value8) {
       
    console.log('b');
    
  }
    
  if (value9 == 6){
      
    console.log('c');
      
  }
    
  if (value10){
      
    console.log('d');
      
  }
    
  if(!value11){
    console.log('e');
  }