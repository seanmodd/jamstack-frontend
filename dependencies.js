const madge = require('madge')

madge('/Users/seanmodd/Dev/jamstack/frontend/').then(res => {
  console.log(res.obj())
})


const madge = require('madge');

madge('path/to/app.js')
	.then((res) => res.svg())
	.then((output) => {
		console.log(output.toString());
	});
