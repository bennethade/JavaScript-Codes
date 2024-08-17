

function avgNums(nums){
    
    let sum = 0;

    for (let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    };
    
    return sum / nums.length;
};

const firstAvg = avgNums([5, 3, 8, 4]);
const secondAvg = avgNums([10, 20, 30, 40]);

// console.log(firstAvg, secondAvg);





function multiplyBy2(num){
    return num * 2;
}

const output = multiplyBy2(33);

console.log(output);
