// 1. For문
for (let i = 1 ; i < 11 ; i++) {
  console.log(i);
}

const numArray = [45, 32, 11, 98, 22];

for (let i = 0; i < numArray.length ; i++) {
  console.log(numArray[i]);
  numArray[i] += 10;
}

console.log(numArray);

// 2. while문
i = 12;
while (i < 11) {
  console.log(i);
  i++;
}

i = 1;
while (true) {
  if (i > 10) {
   break;
 }

  i++;
  if (i%2 !== 0) {
    continue;
  }

  console.log(i);
}

const numArr0 = [45,32,11,98,22];

i = 12;
while (i < numArr0.length) {
  // console.log(numArr0[i]);
  numArr0[i] += 10;
  i ++;
}
console.log(numArr);

// 3. do while문
i = 12;
do {
  console.log(i);
  i++;
} while (i < 11);

// 실습 과제
const numArr = [77, 81, 12, 34, 51, 20];

// for문
for(let i = 0; i < numArr.length; i++) {
	numArr[i] += 10;
}

// while문
let i = 0;
while (i < numArr.length) {
	numArr[i] += 10;
	i++;
}