


const tea = {
    name: "Benard",
    type: 'Black',
    caffeinated: true,
};


const arrayOfTeaValues = Object.values(tea);
console.log(arrayOfTeaValues);
//=> ["Benard", "Black", true]


const arrayOfTeaKeys = Object.keys(tea);
console.log(arrayOfTeaKeys);
//=>["name", "type", "caffeinated"]



const myCar = {
    make: 'Toyota',
    model: 'Prius',
    hybrid: true,
    honk: function(){
        console.log('beep beep');
    }
};

const myCarKeys = Object.keys(myCar);

const myCarValues = Object.values(myCar);



///====////////////
const user = {
    name: 'Philip',
    score: 10,
    platinumMember: true,
    printUserName: function(){
        console.log('troutman201');
    }
};

const displayUserData = user => {
    const userKeys = object.keys(user);
    for(let i = 0; i < userKeys.length; i++){
        console.log(userKeys[i]);
        console.log(user[userKeys[i]]);
    };
};

displayUserData(user);