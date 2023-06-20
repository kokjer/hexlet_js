import _ from "lodash";
import React from "react";

console.log(_.capitalize("hello"));
console.log(_.last(['one', 'two']));

const person = (name, age) => {
    return `Hello ${name}, Age: ${age}`
}