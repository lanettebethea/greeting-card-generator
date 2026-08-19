let name = prompt("A name:");
let occasion = prompt("An occasion:");
let adjective = prompt("An adjective:");
let verb = prompt("A verb:");
let noun = prompt("A noun:");

function makeCard() {
console.log("Dear " + name + ",");
console.log("Congrats on your " + occasion + "!");
console.log("I always knew you would " + verb + " your " + noun + " and I feel so " + adjective + ".");
console.log("Happy birthday from the generator.");
}

console.log("Warming up the generator...");
setTimeout(makeCard, 3000);
console.log("Generator loaded. Card in 3 seconds.");

setInterval(makeCard, 2000);