// a function which give output
import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`${name} is logged in`);
};

const start = () => {
  console.log("System starts");
};
const working = (name) => {
  console.log(`${name} add items to cart`);
};
const checkout = (name) => {
  console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.once("greet", start);
task.on("greet", login);
task.on("greet", working);
task.on("greet", checkout);
task.once("exit", () => {
  console.log("System shutting down");
});

task.emit("greet", "Akash");
task.off("greet", working);
task.emit("greet", "Karan");
task.emit("exit", "Manager");
