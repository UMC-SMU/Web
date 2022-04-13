const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

// 1. 이벤트 핸들러
// target.이벤트이름 = 콜백함수
$div.onclick = handleClick;

function handleClick () {
    console.log('clicked');
}

$div.onclick = () => console.log("clicked"); // 실행 X -> 덮어씌움
$div.onclick = () => alert("clicked"); // 실행 O

// 2. addEventListner
function handleClick_ () {
    console.log('clicked');
}

$div.addEventListener('click', handleClick_); // 실행 O
$div.addEventListener('click', () => alert("clicked")); // 실행 O

// 3. removeEventListner
$div.removeEventListener('click', handleClick_);

// 4. event
$div.addEventListener('click', handleClick0); 

function handleClick0 (event) {
    console.log(event.target.innerText);
}

$input.addEventListener('change', handleChange);

function handleChange(event) {
    // console.log(event.target.value);
}

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    // /event.preventDefault(); // 새로고침 방지
    const inputValue = $input.value; // 입력한 값 받아오기
    $input.value = ''; // 입력 창 초기화
    console.log(inputValue); 
}