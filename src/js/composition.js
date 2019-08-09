import React from "react";

const Composition = () => {
    // const _pipe = (f, g) => (...args) => g(f(...args))

    function _pipe(f,g) {
        console.log("_pipe f",f);
        console.log("_pipe g",g);
        return (
           function hede(...args) {
            console.log("_pipe ...args",...args);
               return g(f(...args))
           }
        )
    }

    // const pipe = (...fns) => fns.reduce(_pipe);

    function pipe(...fns){
        // console.log("pipe fns",...fns);
        return fns.reduce(_pipe);
    }
    
    // const partial = (fn, ...args) => fn.bind(null, ...args);
    
    function partial(fn, ...args){
        // console.log("partial args",...args);
        return fn.bind(null,...args)
    }

    // const add = (a, b, c = 0) => a + b + c;

    function add(a, b, c = 0) {
        // console.log("a",a);
        // console.log("b",b);
        // console.log("c",c);
        return a + b + c;
    }
    
    const multiply = (a, b) => a * b;
    
    const dec = (a) => a - 1;
    
    const comeTogether = pipe(multiply, dec, partial(add, 10, 3));
    
    const result = comeTogether(2, 4);

    console.log("result",result);
    // console.log("result",partial(add, 10, 3)());
    
    return <div />;
}

export default Composition;