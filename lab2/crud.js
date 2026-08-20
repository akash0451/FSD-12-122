import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Get current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// product.json should be in the same folder as crud.js
const FILE = path.join(__dirname, "product.json");

// Read cart
const getCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, create empty cart
    await writeFile(FILE, "[]");
    return [];
  }
};

// Save cart
const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

// Add product
const addToCart = async (product) => {
  const myCart = await getCart();

  const isFound = myCart.find((item) => item.id === product.id);

  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }

  await saveCart(myCart);

  console.log(`Product added/updated with id ${product.id}`);
};

// Show cart
const showCart = async () => {
  const data = await getCart();

  if (data.length === 0) {
    console.log("Cart is empty!");
    return;
  }

  console.table(data);
//   let total =0;
//   for(let i=0;i<data.length; i++){
//     total = total+ data[i].qty * data[i].price;
//   }
const total=data.reduce((t,item)=>t+item.qty*item.price,0);
  console.log("you have to pay: Rs.",total);
};

const remove = async (pid) =>{
    const data = await getCart();
    const count = data.length;
    const newData = data.filter((item)=> item.id !==pid);
    const newCount = newData.length;
    if(count== newCount){
        console.log("Product id not found🤧");
    }
    else{
        await saveCart(newData);
        console.log("product removed successfully");
    }
};

const update = async = (pid,value) =>{
    const data = await getCart();
    const isFound = data.find((item) => item.id == pid);
    if(isFound){
        isFound.qty += value;
        await saveCart(data);
        console.log("product qty updated successfully");
    }
    else{
        console.log("product id not fount");
    }
};

// Main function
const main = async () => {
  let choice;

  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  do {
    console.log("\nWelcome to Flipkart 🤸");
    console.log("1.......... Show cart");
    console.log("2.......... Add Product");
    console.log("3.......... Remove Product");
    console.log("4.......... Update Quantity");
    console.log("5.......... Checkout");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await showCart();

        break;

      case 2: {
        const data = await cin.question("Enter id,name,price,qty: ");

        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());

        const product = {
          id: Number(id),
          name: name,
          price: Number(price),
          qty: Number(qty),
        };

        await addToCart(product);
        break;
      }

      case 3:
        let pid = await cin.question("Enter product id to remove: ");
        await remove(Number(pid));
        
        break;

      case 4:
        let pid2= await cin.question("enter product id to update");
        let value = await cin.question("+1 increase, -1 decrease");
        await update(Number(pid),Number(value));
        break;

      case 5:
        console.log("See you later 👋");
        break;

      default:
        console.log("Invalid choice! Try again 🛑");
    }
  } while (Number(choice) !== 5);

  cin.close();
};

main();
