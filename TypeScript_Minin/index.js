// let str: string = 'Hello TypeScript'
// let num: number = 42
// let isActive: boolean = false
//
// let strArray: string[] = ['H', 'e', 'l']
// let numArray: Array<number> = [1, 1, 2, 3]
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log(this.name + ' Hello!');
    };
    return User;
}());
