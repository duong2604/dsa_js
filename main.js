import { fundamental } from "./first_stage/index.js";
import { intermediate } from "./second_stage/index.js";
import { secondary } from "./third_stage/index.js";

function main() {
  console.log("Starting the main function");
  // fundamental.run();
  // intermediate.run();
  secondary.run();
  console.log("Finished the main function");
}

main();
