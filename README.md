# TypeScript Type Error: String Argument Passed to Number Parameter
This repository demonstrates a common type error in TypeScript that occurs when passing a string argument to a function that expects a number. 

## Bug Description
The TypeScript compiler will throw a type error if you attempt to pass a string to a function that has a number parameter. This is because TypeScript is a statically typed language, meaning that the type of each variable must be known at compile time.

## How to reproduce the bug
1. Clone this repository.
2. Open `bug.ts` in a TypeScript compiler.
3. Run the TypeScript compiler.
4. Observe the type error.

## Solution
The solution is to ensure that all arguments passed to the function are of the correct type. In this case, we can convert the string argument to a number using the `parseInt` function. 

## How to solve the bug
1. Open `bugSolution.ts`.
2. Observe how the issue is resolved by explicitly converting the string to a number using parseInt.
3. Run the TypeScript compiler. The type error will disappear.
