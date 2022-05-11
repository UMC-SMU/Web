// 1. fetch
// promise
const result = [];

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => data.map(item => result.push(item.name)))
.catch(error => console.log(error))

console.log(result);

// async & await
const dataFetch_ = async() => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await response.json();

	return data
}

const dataResult_ = dataFetch_();
console.log(dataResult_);


// 2. axios
// promise
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response => console.log(response.data))

// async & await
const dataFetch = async() => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;

	return response;
}

const dataResult = dataFetch();
console.log(dataResult);