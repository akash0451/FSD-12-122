# EventLoop

JS is synchronous ans single threaded by default

## There can be async behavior
- with BrowserAPI - setTimeout, setInterval,setImmediate,nextTick
- with promises
- with event handlers

## Promise
- A function not executed immediately but it must be executed after a while. 
- It has some status during the execution. 
- At final it may ressolve (sucess) or reject .

## Callback
- Call back function=>that pass as argument or the parameter to another function

## Modern javascript is devided into two category:
1. First category is CommonJS (cjs) -> supports OOPS -> require
  - priority (nextTick, Promise ,setImmediate/setTimeout)
2. Second is ModuleJS (mjs) -> follow modular approach -> import
  - priority (promise, nextTick, setImmediate/setTimeout)