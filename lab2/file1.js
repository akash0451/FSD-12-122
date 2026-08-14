import { appendFile } from "fs";
import {writeFile } from "fs/promises";

// await writeFile("hello.txt","JS is hard");

await appendFile("hello.txt", "\nFS is much easy than others");

