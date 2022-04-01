//배열 실습02

//1. 선언
//일반적인 경우
const travel_spot1 =["방콕", "뉴욕", "파리"];
// new Array()를 사용한 경우
const travel_spot2 =new Array("방콕", "뉴욕", "파리");

const travel_spot3=[];
const travel_spot4=new Array();

travel_spot4[0]='방콕';
travel_spot4[1]='뉴욕';
travel_spot4[2]='파리';

//2. 접근 : index

const paris=travel_spot4[2];

//3. 추가 및 삭제

travel_spot4.push('토론토','퀘백'); //추가

travel_spot4.unshift('바르셀로나');
//맨 앞에 원소 추가

//splice : 원하는 지점에 추가 및 삭제
//splice(시작 index, 삭제하고 싶은 원소의 개수,  추가하고 싶은 원소들)

travel_spot4.splice(4,0,'멜버른', '아테네');

travel_spot4.pop(); //삭제

//shift : 앞에서 원소 삭제
const result1=travel_spot4.shift();
//바르셀로나 삭제됨

//splice의 또 다른 방식
const result2=travel_spot4.splice(3,3); //result2에는 멜버른 아테네 토론토가 들어가 있음

travel_spot4.splice(1,1,'이스탄불', '하노이');
//travel_spot4 배열에는 인덱스 1번째가 삭제되고 그 자리에 이스탄불과 하노이가 들어갔기 때문에 현 배열은 [방콕, 이스탄불, 하노이, 파리] 가 됨
