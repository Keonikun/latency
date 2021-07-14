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
