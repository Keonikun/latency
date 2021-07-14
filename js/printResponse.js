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