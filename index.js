const express = require('express');

const app = express();

app.listen(3000, () => console.log("Listening at port 3000"));
app.use(express.static('public'));
app.use(express.json());

app.get('/trivia', (request, response) => {
  console.log("trivia requested");
  console.log(request.body);
  let data = {
		'lat': 0.001,
		'lon': 42.0,
	}
  response.send(data);
});
