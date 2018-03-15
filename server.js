const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

let mathQuiz = [];
let mathId = 0;
mathQuiz.push({id:mathId++,question:"1 + 1 = ?",choices:[{choice:"3",correct:false,num:0},{choice:"4",correct:false,num:1},
	{choice:"1",correct:false,num:2},{choice:"2",correct:true,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"What number is 4?", choices:[{choice:"two",correct:false,num:0},{choice:"one",correct:false,num:1},
	{choice:"four",correct:true,num:2},{choice:"six",correct:false,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"2 + 5 = ?",choices:[{choice:"7",correct:true,num:0},{choice:"5",correct:false,num:1},
	{choice:"6",correct:false,num:2},{choice:"9",correct:false,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"What number is 8?",choices:[{choice:"one",correct:false,num:0},{choice:"eight",correct:true,num:1},
	{choice:"seven",correct:false,num:2},{choice:"nine",correct:false,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"3 + 3 = ?",choices:[{choice:"3",correct:false,num:0},{choice:"7",correct:false,num:1},
	{choice:"5",correct:false,num:2},{choice:"6",correct:true,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"4 - 1 = ?",choices:[{choice:"2",correct:false,num:0},{choice:"3",correct:true,num:1},
	{choice:"5",correct:false,num:2},{choice:"7",correct:false,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"What number is 10?",choices:[{choice:"ten",correct:true,num:0},{choice:"eleven",correct:false,num:1},
	{choice:"seven",correct:false,num:2},{choice:"three",correct:false,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"8 - 3 = ?",choices:[{choice:"4",correct:false,num:0},{choice:"3",correct:false,num:1},
	{choice:"5",correct:true,num:2},{choice:"11",correct:false,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"6 + 4 = ?",choices:[{choice:"6",correct:false,num:0},{choice:"10",correct:true,num:1},
	{choice:"16",correct:false,num:2},{choice:"2",correct:false,num:3}],correct:0});
mathQuiz.push({id:mathId++,question:"5 - 5 = ?",choices:[{choice:"1",correct:false,num:0},{choice:"2",correct:false,num:1},
	{choice:"0",correct:true,num:2},{choice:"10",correct:false,num:3}],correct:0});

let colorQuiz = [];
let colorId = 0;
colorQuiz.push({id:colorId++,question:"./images/black.png",choices:[{choice:"White",correct:false,num:0},
	{choice:"Blue",correct:false,num:1},{choice:"Black",correct:true,num:2}],correct:0});
colorQuiz.push({id:colorId++,question:"./images/blue.png",choices:[{choice:"Blue",correct:true,num:0},
	{choice:"Red",correct:false,num:1},{choice:"Purple",correct:false,num:2}],correct:0});
colorQuiz.push({id:colorId++,question:"./images/green.jpg",choices:[{choice:"Green",correct:true,num:0},
	{choice:"Yellow",correct:false,num:1},{choice:"Orange",correct:false,num:2}],correct:0});
colorQuiz.push({id:colorId++,question:"./images/orange.jpg",choices:[{choice:"Green",correct:false,num:0},
	{choice:"Yellow",correct:false,num:1},{choice:"Orange",correct:true,num:2}],correct:0});
colorQuiz.push({id:colorId++,question:"./images/purple.png",choices:[{choice:"Blue",correct:false,num:0},
	{choice:"Purple",correct:true,num:1},{choice:"Black",correct:false,num:2}],correct:0});
colorQuiz.push({id:colorId++,question:"./images/red.jpg",choices:[{choice:"Red",correct:true,num:0},
	{choice:"Blue",correct:false,num:1},{choice:"Purple",correct:false,num:2}],correct:0});
colorQuiz.push({id:colorId++,question:"./images/turquoise.jpeg",choices:[{choice:"Blue",correct:false,num:0},
	{choice:"Turquoise",correct:true,num:1},{choice:"Green",correct:false,num:2}],correct:0});
colorQuiz.push({id:colorId++,question:"./images/yellow.jpg",choices:[{choice:"Orange",correct:false,num:0},
	{choice:"White",correct:false,num:1},{choice:"Yellow",correct:true,num:2}],correct:0});

let animalQuiz = [];
let animalId = 0;
animalQuiz.push({id:animalId++,question:"./images/elephant.jpg",choices:[{choice:"Giraffe",correct:false,num:0},
	{choice:"Bear",correct:false,num:1},{choice:"Elephant",correct:true,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/grizzlybear.jpg",choices:[{choice:"Grizzly Bear",correct:true,num:0},
	{choice:"Polar Bear",correct:false,num:1},{choice:"Rhino",correct:false,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/lion.jpg",choices:[{choice:"Tiger",correct:false,num:0},
	{choice:"Lion",correct:true,num:1},{choice:"Bear",correct:false,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/monkey.jpeg",choices:[{choice:"Snake",correct:false,num:0},
	{choice:"Human",correct:false,num:1},{choice:"Monkey",correct:true,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/panda.jpg",choices:[{choice:"Panda Bear",correct:true,num:0},
	{choice:"Black Bear",correct:false,num:1},{choice:"Grizzly Bear",correct:false,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/penguin.jpg",choices:[{choice:"Chicken",correct:false,num:0},
	{choice:"Penguin",correct:true,num:1},{choice:"Blue Bird",correct:false,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/rhino.jpg",choices:[{choice:"Hippo",correct:false,num:0},
	{choice:"Elephant",correct:false,num:1},{choice:"Rhino",correct:true,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/tiger.jpg",choices:[{choice:"Tiger",correct:true,num:0},
	{choice:"Lion",correct:false,num:1},{choice:"Cheetah",correct:false,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/tortoise.jpg",choices:[{choice:"Tortoise",correct:true,num:0},
	{choice:"Lizard",correct:false,num:1},{choice:"Snake",correct:false,num:2}],correct:0});
animalQuiz.push({id:animalId++,question:"./images/zebra.jpg",choices:[{choice:"Horse",correct:false,num:0},
	{choice:"Zebra",correct:true,num:1},{choice:"Tiger",correct:false,num:2}],correct:0});

let userQuizzes = [];
let currQuiz = [];


app.get("/api/kindergartenquizzes/math/", (req, res) => {
	res.send(mathQuiz);
});

app.get("/api/kindergartenquizzes/new/math/", (req, res) => {
	for (var i = 0; i < mathQuiz.length; i++) {
		mathQuiz[i].correct = 0;
	}
	res.send(mathQuiz);
});

app.put("/api/kindergartenquizzes/math/:id", (req, res) => {
	let id = parseInt(req.params.id);
	let item = mathQuiz[id];
	item.correct = req.body.correct;
	mathQuiz[id] = item;
	res.sendStatus(200);
});

app.get("/api/kindergartenquizzes/color/", (req, res) => {
	res.send(colorQuiz);
});

app.get("/api/kindergartenquizzes/new/color/", (req, res) => {
	for (var i = 0; i < colorQuiz.length; i++) {
		colorQuiz[i].correct = 0;
	}
	res.send(colorQuiz);
});

app.put("/api/kindergartenquizzes/color/:id", (req, res) => {
	let id = parseInt(req.params.id);
	let item = colorQuiz[id];
	item.correct = req.body.correct;
	colorQuiz[id] = item;
	res.sendStatus(200);
});

app.get("/api/kindergartenquizzes/animal/", (req, res) => {
	res.send(animalQuiz);
});

app.get("/api/kindergartenquizzes/new/animal/", (req, res) => {
	for (var i = 0; i < animalQuiz.length; i++) {
		animalQuiz[i].correct = 0;
	}
	res.send(animalQuiz);
});

app.put("/api/kindergartenquizzes/animal/:id", (req, res) => {
	let id = parseInt(req.params.id);
	let item = animalQuiz[id];
	item.correct = req.body.correct;
	animalQuiz[id] = item;
	res.sendStatus(200);
});

app.get("/api/kindergartenquizzes/user/", (req, res) => {
	res.send(userQuizzes);
});

app.post("/api/kindergartenquizzes/user/", (req, res) => {
	userQuizzes.push(req.body.quiz);
	res.send(userQuizzes);
});

app.get("/api/kindergartenquizzes/takequiz/user/", (req, res) => {
	res.send(currQuiz);
});

app.get("/api/kindergartenquizzes/new/takequiz/user/", (req, res) => {
	for (var i = 0; i < currQuiz.length; i++) {
		currQuiz[i].correct = 0;
	}
	res.send(currQuiz);
});

app.put("/api/kindergartenquizzes/takequiz/user/:id", (req, res) => {
	let id = parseInt(req.params.id);
	let item = currQuiz.quiz[id];
	item.correct = req.body.correct;
	currQuiz.quiz[id] = item;
	res.sendStatus(200);
});

app.put("/api/kindergartenquizzes/user/", (req, res) => {
	currQuiz = req.body.quiz;
	res.sendStatus(200);
});

app.delete("/api/kindergartenquizzes/user/:name", (req, res) => {
	let name = req.params.name;
	console.log(name);
	let removeIndex = -1;
	for (var i = 0; i < userQuizzes.length; i++) {
		if (userQuizzes[i].name === name) {
			removeIndex = i;
			break;
		}
	}
	if (removeIndex === -1) {
		res.status(404).send("Sorry, that item doesn't exist");
		return;
	}
	userQuizzes.splice(removeIndex, 1);
	res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));





