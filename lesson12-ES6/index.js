console.log(sum(1,2));

function sum(a, b) {
    console.log("sum 2 numbers");
      return a + b;
  };

//   arow fuction để tránh hoisting
  const sumArrow = (a,b) =>{
      console.log("sum 2 numbers with arrow");
      return a + b;
    }
    
    console.log(sumArrow(1,2));

    const sub = (a,b) => a-b; //short-handed function
    console.log(sub(1,2));

const double = a => a*2; //single param
console.log(double(45));

const getAddress = () => ( //ngoặc tròn nha mày
 
    {
        name: 'Thuan',
        age: 25,
    }
    )
    console.log(getAddress());


const getArr = () => ( //ngoặc tròn nha mày
 
    [1,2,3]
)



console.log(getArr());

const school = {
    name: 'Thuan',
    age: 28,
}

const increaseAge = (obj) => {
    obj.age +=1;
    return school;
}
console.log(increaseAge(school));

//template literal

console.log(`Hello, \n${school.name}!`);


// import {sum as sumMath} from "./modules/math";

// console.log(sumMath(5,6));

import myMath from "./modules/math.js";
console.log(myMath.sub2(1, 5));










