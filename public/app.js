const result_div = document.getElementById("question-text");
const button_div = document.getElementById("plate");
console.log(result_div.innerHTML);


async function requestTriviaQuestion() {
	const response = await fetch('?');
	const data = await response.json();
}


button_div.addEventListener("click", async () => {
console.log("request for a new bit of trivia");
	let data = {
		'field1': 0.001,
		'field2': 42.0,
	}
	let request = {
		method: 'GET',
		headers: {
			'Content-type': 'applications/json'
		},
		body: JSON.stringify(data),
	};
	// fetch('/trivia').then((response) => {console.log(response);})
	const resp = await fetch('/trivia', request);
	let text = await resp.text();
	console.log(text);
	result_div.innerHTML = text;
	// const json = await resp.json();
	// console.log(json);
	// const response = await fetch('/trivia');
	// const dd = await response.json();
	// console.log(dd);
});
