// 변수 

const name = 'Fody';
let age = 24;

// 자료형 
// 1. string 

const str = "안녕";
const str2 = "hi";
const num = "2!!";

// 2.number 
const number = 2;

// 3. bigInt 

// 4. boolean 
const bool = true;
const bool1 = false;

// 5. symbol : 중복되지 않는 고유값

// 6-7. null / undefined

const a = undefined;
const b = null;

let variable;
console.log(variable); // undefined

variable = null;
console.log(variable) // null

// 8. object 

// 연산자
// 1. 산술연산자 : +, - , /, *, %, **, ++, --

const aa = 10 % 3;
console.log(aa);

const bb = 10 ** 2;
console.log(bb);

let cc = 5;
cc += 10; // cc = cc + 10
console.log(cc);

cc -= 8; // cc = cc - 8;
console.log(cc);

// 2. 할당 연산자 : =

// 3. 문자열 연산자 : + , +=
let data = "happy" + " " + "2022";
console.log(data);

data += "!!"; //data = data + '!!'
console.log(data);

// 비교 연산자 
// 1. == 
1 == '1' // true

// 2. === 
1 === '1' // false

// 3. != 
null != undefined // false

// 4. !== 
null !== undefined // true

// 5. 부등호 
'a' > 'aa' // false

//논리연산자 
// &&
const numdata = 5;
numdata > 0 && numdata < 10 // true

// || 
numdata > 0 || numdata > 10 // true

// ! 
!(numdata > 5) // true