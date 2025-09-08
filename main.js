import Greedy from "./greedy/index.js";

function main() {
  const greedy = new Greedy();
  console.log(greedy.coinChangeGreedy([10, 5, 2, 1], 30));
}

main();
