function car() {
  let make = "Tesla";
  let model = "Model S";
  let colour = "White";
  return `This car is a ${colour} ${make} ${model}.`;
}

console.log(car()); // Output: This car is a White Tesla Model S.

function sayHello() {
  const name = "Bob";
  console.log("Hello " + name + "!");
}

sayHello(); // Output: Hello Bob!

function rugbyTeam() {
  const question = `Who is the current best rugby team in the world?? 🤔`;
  let answer = `definitely the Springboks`;
  console.log(`${question} ${answer} ❣️🥳 🏆🏆🏆🏆`);
}

rugbyTeam();
