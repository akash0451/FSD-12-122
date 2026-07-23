// waf to take any digit (0-9) and
// return its in word


// function print(a){
   
//      if(a==0) console.log("");
//      if (a == 1) console.log("one");
//      if (a == 2) console.log("two");
//      if (a == 3) console.log("three");
//      if (a == 4) console.log("four");
//      if (a == 5) console.log("five");
//      if (a == 6) console.log("six");
//      if (a == 7) console.log("seven");
//      if (a == 8) console.log("eight");
//      if (a == 9) console.log("nine");
// }
// print(5);

const toWords =(digit)=>{
    const words = ["zero", "one","two","three","four","five","six","seven","eight","nine"];
    return words[digit];
}
console.log(toWords(5));