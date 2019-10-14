import React from "react";

const Composition = () => {
    // const _pipe = (f, g) => (...args) => g(f(...args))

    function _pipe(accumulator,currentElement) {
        console.log("accumulator: ",accumulator);
        console.log("currentElement: ",currentElement);
        console.log("-----------------");
        return (
           function hede(...args) {
               return currentElement(accumulator(...args));
           }
        )
    }

    // const pipe = (...fns) => fns.reduce(_pipe);

    function pipe(...fns){
        return fns.reduce(_pipe);
    }
    
    // const partial = (fn, ...args) => fn.bind(null, ...args);
    
    function partial(fn, ...args){
        return fn.bind(null,...args)
    }

    // const add = (a, b, c = 0) => a + b + c;

    function add(a, b, c = 0) {
        return a + b + c;
    }
    
    const multiply = (a, b) => a * b;
    
    const dec = (a) => a - 1;
    
    const comeTogether = pipe(multiply, dec, partial(add, 10, 3));
    
    const result = comeTogether(2, 4);

    console.log("result: ",result);

    return <div />;
}

export default Composition;