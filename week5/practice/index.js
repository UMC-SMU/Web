const $div= document.querySelector('.container');
const $form= document.querySelector('form');
const $input= document.querySelector('input');
const $button= document.querySelector('button');

// 1. 이벤트 핸들러
//$div.이벤트이름 = 콜백함수

// $div.onclick=()=>console.log("clicked");
// $div.onclick=()=>alert("clicked");

// $div.onclick=handleClick;
// function handleClick(){
//     console.log('clicked');
// }

// 2. addEventListener

// $div.addEventListener('click', handleClick);
// $div.addEventListener('click', () => alert("clicked"));

// 3. removeEventListener
// function handleClick(){
//     console.log('clicked');
// }

// $div.removeEventListener('click',handleClick);

$div.addEventListener('click', handleClick);
function handleClick(event){
    console.log(event.target.innerText);
}

$input.addEventListener('change', handleChange);
function handleChange(e) {
    console.dir(e.target.value);
}

$form.addEventListener('submit', handleSbmit);
function handleSbmit(e){
    e.preventDefault();
    const inputValue = $input.value;
     
}