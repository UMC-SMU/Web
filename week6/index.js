// setItem 
localStorage.setItem("name", "Fody");
localStorage.setItem("age", 24);

// getItem 
const result = localStorage.getItem("age");
console.log(typeof result);

// JSON.stringify
const travel = {
  destinations: ["paris", "sydney", "taipei"],
  days: 100,
  mate: undefined,
  isAvailable: true,
};

localStorage.setItem("travel", JSON.stringify(travel));

// JSON.parse
const data = JSON.parse(localStorage.getItem("travel"));
console.log(data.destinations);

// removeItem
localStorage.removeItem("name");

// clear
localStorage.clear();