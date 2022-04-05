// 배열
// 1. 선언 
const travel_spot = ['방콕', '뉴욕', '파리'];

const travel_spot1 = new Array('방콕', '뉴욕', '파리');

const travel_spot2 = new Array();
travel_spot[0] = "방콕";
travel_spot[1] = "뉴욕";
travel_spot[2] = "파리";

// 2. 접근 
const paris = travel_spot[2];
console.log(paris);

// 3. 추가 및 삭제
// push 
travel_spot.push("토론토", "퀘백");
console.log(travel_spot);

// unshift 
travel_spot.unshift("바르셀로나");
console.log(travel_spot);

// splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들)
travel_spot.splice(4, 0, "멜버른", "아테네");
console.log(travel_spot);

// pop 
const result = travel_spot.pop();
console.log(travel_spot, result);

// shift 
const result1 = travel_spot.shift();
console.log(travel_spot, result1);

// splice
const result2 = travel_spot.splice(3, 3);
console.log(travel_spot, result2);

travel_spot.splice(1, 1, "이스탄불", "하노이");
console.log(travel_spot);