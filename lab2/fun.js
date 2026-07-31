const F1 = () => {
  console.log("F1");
};
const F2 = () => {
  console.log("F2");
};
const F3 = () => {
  console.log("F3");
};
const F4 = () => {
  console.log("F4");
};

function main() {
  console.log("main ");
  setTimeout(F1, 1000);
  setImmediate(F2);
  
  F3();
  
  console.log("End");
}
main();
