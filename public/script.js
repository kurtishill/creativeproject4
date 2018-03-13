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









