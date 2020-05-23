const result_div = document.getElementById("question-text");
const button_div = document.getElementById("plate");
console.log(result_div.innerHTML);


async function requestTriviaQuestion() {
	const response = await fetch('?');
	const data = await response.json();
}

button_div.addEventListener("click", () => console.log("request for a new bit of trivia"));
