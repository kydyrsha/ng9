// let str: string = 'Hello TypeScript'
// let num: number = 42
// let isActive: boolean = false
//
// let strArray: string[] = ['H', 'e', 'l']
// let numArray: Array<number> = [1, 1, 2, 3]

//
// function logInfo(name: string, age: number): void {
//   console.log(`Info: ${name}, ${age}`)
// }
//
// logInfo('Sanat', 23)
//
//
// function calc(a:number, b:number): number {
//   if (typeof b === 'string') b = +b
//   return a + b
// }
//
// console.log(calc(2, 3))


// class Server {
//   static VERSION = '1.0.3'
//
//   private status: string = 'working'
//
//   constructor(public name: string, protected ip: number) {
//   }
//
//   public turnOn() {
//     this.status = 'working'
//   }
//
//   protected turnOff() {
//     this.status = 'offline'
//   }
//
//   getStatus(): string {
//     return this.status
//   }
// }
//
// const server: Server = new Server('AWS', 1234)


// OBJECTS

interface UserInterface {
  name: string
  age: number
  logInfo: () => void
  id?: any
}

const user: UserInterface = {
  name: 'Sanat',
  age: 23,
  logInfo() {
    console.log(this.name = ' ' + this.age)
  }
}
