//script

var prompt = [
	"The World is One, Temporal and Constant.",
	"Eternity transcends the temporal and instantiates the eternal.",
	"It is of the World that I care.",
	"I am in the World; therefore, the World is I.",
	"I am an instant later the World; therefore, the World is the I.",
	"It is necessary that the World and I be the same person.",
	"It is better that we not know who we are; therefore, we are shadows of the Person we pretend to defend.",
	"The Person must be perfect in everything he does; therefore, he that dares to be different is different.",
	"The world is his defect; therefore, the world is worse than his defect.",
	"As everything depends on the world, so everything depends on the Person."
]

var response = [
	"Each characteristic corresponds to a corresponding act of the Person.",
	"Each characteristic acts at a time: after the manner of a thief, for instance.",
	"Each manner closely corresponds to an identical character.",
	"The Person is painful to the sensitive parts of his soul.",
	"Each character corresponds to a transposition in the Teachings. A negation corresponds to its analysis.",
	"As each term increases, so his act more completely coincides with the blotted-out terms.",
	"Each of the blotted-out terms is responsible for a distinct minor transgression.",
	"Each major transgression is explained.",
	"The last term considers the fact that 'the world is his defect;' the preceding consider the fact that 'the world is better than his defect.'",
	"The Person has six characteristics: justice, beneficence, affection, hardihood, rashness, scepticism."
]

//prompt

let el = document.querySelector('.prompt');
let fx = new Scramble(el);

let counter = 0;
/*
fx.setText(prompt[counter]).then(() => {
    setTimeout(next, 5000);
  });

*/
let next = () => {
  fx.setText(prompt[counter]).then(() => {
    setTimeout(next, 5000);
  });
  counter = (counter + 1) % prompt.length;
};

next();

//response

let el2 = document.querySelector(".response");
let fx2 = new Scramble(el2);

let counter2 = 0;
let next2 = () => {
  fx2.setText(response[counter2]).then(() => {
    setTimeout(next2, 5018);
  });
  counter2 = (counter2 + 1) % response.length;
};

next2();

