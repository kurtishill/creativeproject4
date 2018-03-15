var mathApp = new Vue({
	el: '#math-app',
	data: {
		mathQuiz: [],
		id: 0,
		ready: false,
		correct: 0,
		answer: {},
		complete: false,
		numRight: 0,
		nextButtonText: 'Next',
		encouragementText: '',
	},
	methods: {
		getMathQuiz: function() {
			axios.get("/api/kindergartenquizzes/math/").then(response => {
				this.mathQuiz = response.data;
				this.ready = true;
				return true;
			}).catch(err => {
				console.log("Error while fetching math quiz.");
			});
		},
		startNewMathQuiz: function() {
			axios.get("/api/kindergartenquizzes/new/math/").then(response => {
				this.mathQuiz = response.data;
				console.log(this.mathQuiz);
				this.ready = true;
				this.id = 0;
				this.correct = 0;
				this.numRight = 0;
				this.answer = {};
				this.nextButtonText = 'Next';
				return true;
			}).catch(err => {
				console.log("Error while restarting math quiz.");
			});
		},
		startMathQuiz: function() {
			this.getMathQuiz();
		},
		clickAnswer: function(answer) {
			this.answer = answer;
		},
		submitAnswer: function() {
			if (this.answer.correct === true)
				this.correct = 1;
			else
				this.correct = 0;
			axios.put("/api/kindergartenquizzes/math/" + this.id, {
				correct: this.correct,
			}).then(response => {
				if (this.id + 1 === this.mathQuiz.length) {
					axios.get("/api/kindergartenquizzes/math/").then(response => {
						this.mathQuiz = response.data;
						this.complete = true;
						this.ready = false;
						for (var i = 0; i < this.mathQuiz.length; i++) {
							this.numRight += this.mathQuiz[i].correct;
						}
						if (this.numRight > 5)
							this.encouragementText = 'Good job!';
						else
							this.encouragementText = 'Let\'s practice some more.';
						return;
					}).catch(err => {

					});
				} else {
					this.id++;
					if (this.id + 1 === this.mathQuiz.length)
						this.nextButtonText = 'Finish';
					return true;
				}
			}).catch(err => {
				console.log("Error while submitting answer for math quiz.");
			});
		},
		prev: function() {
			if (this.id > 0)
				this.id--;
			this.nextButtonText = 'Next';
		},
	},
});

var colorApp = new Vue({
	el: '#color-app',
	data: {
		colorQuiz: [],
		id: 0,
		ready: false,
		correct: 0,
		answer: {},
		complete: false,
		numRight: 0,
		nextButtonText: 'Next',
		encouragementText: '',
	},
	methods: {
		getColorQuiz: function() {
			axios.get("/api/kindergartenquizzes/color/").then(response => {
				this.colorQuiz = response.data;
				this.ready = true;
				return true;
			}).catch(err => {
				console.log("Error while fetching color quiz.");
			});
		},
		startNewColorQuiz: function() {
			axios.get("/api/kindergartenquizzes/new/color/").then(response => {
				this.colorQuiz = response.data;
				this.ready = true;
				this.id = 0;
				this.correct = 0;
				this.numRight = 0;
				this.answer = {};
				this.nextButtonText = 'Next';
				return true;
			}).catch(err => {
				console.log("Error while restarting color quiz.");
			});
		},
		startColorQuiz: function() {
			this.getColorQuiz();
		},
		clickAnswer: function(answer) {
			this.answer = answer;
		},
		submitAnswer: function() {
			if (this.answer.correct === true)
				this.correct = 1;
			else
				this.correct = 0;
			axios.put("/api/kindergartenquizzes/color/" + this.id, {
				correct: this.correct,
			}).then(response => {
				if (this.id + 1 === this.colorQuiz.length) {
					axios.get("/api/kindergartenquizzes/color/").then(response => {
						this.colorQuiz = response.data;
						this.complete = true;
						this.ready = false;
						for (var i = 0; i < this.colorQuiz.length; i++) {
							this.numRight += this.colorQuiz[i].correct;
						}
						if (this.numRight > 4)
							this.encouragementText = 'Good job!';
						else
							this.encouragementText = 'Let\'s practice some more.';
						return;
					}).catch(err => {

					});
				} else {
					this.id++;
					if (this.id + 1 === this.colorQuiz.length)
						this.nextButtonText = 'Finish';
					return true;
				}
			}).catch(err => {
				console.log("Error while submitting answer for color quiz.");
			});
		},
		prev: function() {
			if (this.id > 0)
				this.id--;
			this.nextButtonText = 'Next';
		},
	},
});

var animalApp = new Vue({
	el: '#animal-app',
	data: {
		animalQuiz: [],
		id: 0,
		ready: false,
		correct: 0,
		answer: {},
		complete: false,
		numRight: 0,
		nextButtonText: 'Next',
		encouragementText: '',
	},
	methods: {
		getAnimalQuiz: function() {
			axios.get("/api/kindergartenquizzes/animal/").then(response => {
				this.animalQuiz = response.data;
				this.ready = true;
				return true;
			}).catch(err => {
				console.log("Error while fetching animal quiz.");
			});
		},
		startNewAnimalQuiz: function() {
			axios.get("/api/kindergartenquizzes/new/animal/").then(response => {
				this.animalQuiz = response.data;
				this.ready = true;
				this.id = 0;
				this.correct = 0;
				this.numRight = 0;
				this.answer = {};
				this.nextButtonText = 'Next';
				return true;
			}).catch(err => {
				console.log("Error while restarting animal quiz.");
			});
		},
		startAnimalQuiz: function() {
			this.getAnimalQuiz();
		},
		clickAnswer: function(answer) {
			this.answer = answer;
		},
		submitAnswer: function() {
			if (this.answer.correct === true)
				this.correct = 1;
			else
				this.correct = 0;
			axios.put("/api/kindergartenquizzes/animal/" + this.id, {
				correct: this.correct,
			}).then(response => {
				if (this.id + 1 === this.animalQuiz.length) {
					axios.get("/api/kindergartenquizzes/animal/").then(response => {
						this.animalQuiz = response.data;
						this.complete = true;
						this.ready = false;
						for (var i = 0; i < this.animalQuiz.length; i++) {
							this.numRight += this.animalQuiz[i].correct;
						}
						if (this.numRight > 5)
							this.encouragementText = 'Good job!';
						else
							this.encouragementText = 'Let\'s practice some more.';
						return;
					}).catch(err => {

					});
				} else {
					this.id++;
					if (this.id + 1 === this.animalQuiz.length)
						this.nextButtonText = 'Finish';
					return true;
				}
			}).catch(err => {
				console.log("Error while submitting answer for animal quiz.");
			});
		},
		prev: function() {
			if (this.id > 0)
				this.id--;
			this.nextButtonText = 'Next';
		},
	},
});

var takeQuizApp = new Vue({
	el: '#take-quiz-app',
	data: {
		quiz: [],
		id: 0,
		ready: false,
		correct: 0,
		answer: {},
		complete: false,
		numRight: 0,
		nextButtonText: 'Next',
		encouragementText: '',
	},
	methods: {
		getQuiz: function() {
			axios.get("/api/kindergartenquizzes/takequiz/user/").then(response => {
				this.quiz = response.data;
				this.ready = true;
				console.log(this.quiz);
			}).catch(err => {
				console.log("Error while retrieving user's quiz.");
			});
		},
		startNewUserQuiz: function() {
			axios.get("/api/kindergartenquizzes/new/takequiz/user/").then(response => {
				this.quiz = response.data;
				this.ready = true;
				this.id = 0;
				this.correct = 0;
				this.numRight = 0;
				this.answer = {};
				this.nextButtonText = 'Next';
				return true;
			}).catch(err => {
				console.log("Error while restarting user quiz.");
			});
		},
		startUserQuiz: function() {
			this.getQuiz();
		},
		clickAnswer: function(answer) {
			this.answer = answer;
		},
		submitAnswer: function() {
			if (this.answer.correct === true)
				this.correct = 1;
			else
				this.correct = 0;
			axios.put("/api/kindergartenquizzes/takequiz/user/" + this.id, {
				correct: this.correct,
			}).then(response => {
				if (this.id + 1 === this.quiz.quiz.length) {
					axios.get("/api/kindergartenquizzes/takequiz/user/").then(response => {
						this.quiz = response.data;
						this.complete = true;
						this.ready = false;
						for (var i = 0; i < this.quiz.quiz.length; i++) {
							this.numRight += this.quiz.quiz[i].correct;
						}
						if (this.numRight >= this.quiz.quiz.length / 2)
							this.encouragementText = 'Good job!';
						else
							this.encouragementText = 'Let\'s practice some more.';
						return;
					}).catch(err => {

					});
				} else {
					this.id++;
					if (this.id + 1 === this.quiz.quiz.length)
						this.nextButtonText = 'Finish';
					return true;
				}
			}).catch(err => {
				console.log("Error while submitting answer for user quiz.");
			});
		},
		prev: function() {
			if (this.id > 0)
				this.id--;
			this.nextButtonText = 'Next';
		},
	},
});

var yourQuizzesApp = new Vue({
	el: '#your-quizzes-app',
	data: {
		quizList: [],
	},
	methods: {
		getQuizList: function() {
			axios.get("api/kindergartenquizzes/user/").then(response => {
				this.quizList = response.data;
				return true;
			}).catch(err => {
				console.log("Error while getting quizList.");
			})
		},
		takeQuiz: function(quiz) {
			axios.put("/api/kindergartenquizzes/user/", {
				quiz: quiz
			}).then(response => {
				return true;
			}).catch(err => {
				console.log("Error while initializing user's quiz.");
			});
		},
		deleteQuiz: function(quiz) {
			axios.delete("api/kindergartenquizzes/user/" + quiz.name).then(response => {
        		this.getQuizList();
        		return true;
      		}).catch(err => {
      			console.log("Error while deleting quiz.");
      		});
		},
	},
	created: function() {
		this.getQuizList();
	}
});

var makeQuizApp = new Vue({
	el: '#make-quiz-app',
	data: {
		userQuiz: [],
		id: 0,
		name: '',
		subject: '',
		question: '',
		choice1: '',
		choice2: '',
		choice3: '',
		correct: '',
	},
	methods: {
		initQuestion: function() {
			if (this.question==='' || this.choice1==='' || this.choice2==='' || this.choice3==='' || this.correct==='')
				alert("Please choose a question, create choices, and select which choice is correct.");
			else {
				var correct1 = false;
				var correct2 = false;
				var correct3 = false;
				if (this.correct === "one")
					correct1 = true;
				else if (this.correct === "two")
					correct2 = true;
				else if (this.correct === "three")
					correct3 = true;
				this.userQuiz.push({id:this.id++,question:this.question,choices:[{choice:this.choice1,correct:correct1,num:0},
					{choice:this.choice2,correct:correct2,num:1},{choice:this.choice3,correct:correct3,num:2}],correct:0});

				this.clearFields();
			}
		},
		addQuestion: function() {
			this.initQuestion();
		},
		createQuiz: function() {
			if (this.name === '') {
				alert("Please choose a name for your quiz.")
			}
			else if (this.question !== '' || this.choice1 !== '' || this.choice2 !== '' || this.choice3 !== '' || this.correct !== '') {
				if (confirm("There is information in the text boxes! If you continue, this question will not be added. Continue anyway?")) {
					this.createHelper();
				}
			}
			else {
				if (this.userQuiz.length > 0)
					this.createHelper();
				else {
					alert("This quiz has no information. It will not be created.");
				}
			}
		},
		clearFields: function() {
			this.question = '';
			this.choice1 = '';
			this.choice2 = '';
			this.choice3 = '';
			this.correct = '';
		},
		createHelper: function() {
			if (this.userQuiz.length === 0)
				alert("This quiz has no information. It will not be created.");
			else {
				quiz = {name:this.name, subject:this.subject, quiz:this.userQuiz};
					axios.post("api/kindergartenquizzes/user/", {
						quiz: quiz
					}).then(response => {
						this.name = '';
						this.subject = '';
						this.clearFields();
						alert("Congratulations! You made a quiz!");
						return true;
					}).catch(err => {
						console.log("Error while creating user quiz.");
					});
				}
			}
		}
});








