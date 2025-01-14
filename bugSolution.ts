function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, parseInt('10', 10)); //Fixed: '10' is converted to a number using parseInt
console.log(result); // Output: 15