// DOM 선택
const $body = document.getElementsByTagName("body");
const $container = document.getElementsByClassName("container");
const $title = document.getElementById("title");
const $cityList = document.getElementById("cityList");
const $cities = $cityList.getElementsByTagName("li");
const $cityDiv = document.querySelector(".city");
const $citiesAll = $cityList.querySelectorAll('li');

// 메서드 
console.log($body[0].innerHTML);
console.log($container[0].innerText);
console.log($title);
console.log($cityList);
console.log($cities);

$citiesAll.forEach(city => console.log(city.innerText));

// 유사 배열 -> 배열
// 1. spread operator
const newCities = [...$cities];
newCities.map(city => console.log(city.innerText));

// 2.Array.from
const newCities_ = Array.from($cities);
newCities_.map((city) => console.log(city.innerText));

// Style 변경
$body[0].style.backgroundColor = "teal";
$cityDiv.style.color = "grey";

// element 추가
const worstCity = document.createElement("ul");

worstCityArr.map((city) => {
  const worstCityItem = document.createElement("li");
  worstCityItem.innerText = city;
  console.log(worstCityItem);
  worstCity.appendChild(worstCityItem);
});

// CityDiv 안에 넣기
// 1.
$cityDiv.appendChild(worstCity);

// 2.
const worstCityList = `
<ul>
  <li>Cairo</li>
  <li>London</li>
  <li>Risbon</li>
   <li>Sydney</li>
<ul>
`
$cityDiv.insertAdjacentHTML('beforeend',worstCityList);

// worst div 만들기
const worstCityDiv = document.createElement("div");
const worstCitySubTitle = document.createElement("h2");
const worstCityArr = ["Cairo", "London", "Risbon", "Sydney"];

worstCitySubTitle.innerText = "< Worst 5 >";
worstCityDiv.appendChild(worstCitySubTitle);
worstCityDiv.appendChild(worstCity);
$container[0].appendChild(worstCityDiv);

// classList
worstCityDiv.classList.add("city");
worstCityDiv.classList.remove('city');

//setAttribute
worstCity.setAttribute("name", "worstCity");

console.log(worstCity);