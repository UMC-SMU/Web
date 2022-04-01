//변수와 연산자 실습01

const 변수1= '코딩';
let 변수2='자바스크립트';

변수2='코딩은 어려워';

//-----------------------

//데이터타입, 자료형 :
// 1. string : 문자열

const str='안녕';
const str2='hi';
const strNum='2!!'

//2. number : 숫자

const number=2;

//3.bigInt : 큰길이 숫자
//BigInt는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형입니다.
//정수 리터럴 끝에 n을 붙이거나 함수 BigInt를 호출하면 문자열이나 숫자를 가지고 BigInt 타입의 값을 만들 수 있습니다.
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt("1234567890123456789012345678901234567890");

const bigintFromNumber = BigInt(10); // 10n과 동일합니다.


//4. boolean : true, false
const bool=true;
const bool1=false;

//5. symbol : 중복되지 않는 고유값
let id1 = Symbol();
// 심볼 id에는 "id"라는 설명이 붙습니다.
let id2 = Symbol("id");

//6-7. null / undefined
const a= undefined; //자동적으로 값이 없다고 인식
const b=null; //수동적으로(의도적으로) 값이 없다고 인식

//8. object: 객체 - 함수, 배열, 객체
let user = new Object();

// ------------------------------

//1. 산술연산자 : +, -, /, *, %, **, ++, --

const aa=10%3; // 1
const bb=10**2; //제곱 -> 100

let cc=5;
++cc; //cc=6
cc++; //cc=6
//console.log(cc) //cc=7

--cc; //cc=6
cc--; //cc=6
//console.log(cc) //cc=5

//2. 할당 연산자 : =
cc+=10; //cc=cc+10
cc-=8; // cc=cc-8

//3. 문자열 연산자 : +
let data = 'happy' + '2022';
// -> happy2022

//논리 연산자

