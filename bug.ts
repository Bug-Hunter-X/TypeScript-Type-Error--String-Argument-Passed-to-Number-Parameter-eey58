function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, '10'); // Type Error, since a is number and b is number but in the function call we are passing '10' which is a string
console.log(result);