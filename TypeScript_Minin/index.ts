// let str: string = 'Hello TypeScript'
// let num: number = 42
// let isActive: boolean = false
//
// let strArray: string[] = ['H', 'e', 'l']
// let numArray: Array<number> = [1, 1, 2, 3]


function logInfo(name: string, age: number): void {
  console.log(`Info: ${name}, ${age}`)
}

logInfo('Sanat', 23)


function calc(a:number, b:number): number {
  if (typeof b === 'string') b = +b
  return a + b
}

console.log(calc(2, 3))
