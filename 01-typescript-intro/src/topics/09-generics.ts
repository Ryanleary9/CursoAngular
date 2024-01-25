export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amISting = whatsMyType<string>("Hola Mundo");
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amISting.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));
