
console.log("Hello World!!")

//types 
var myString: string = "Hello World!!";
myString = 22 + "";

var myNumber: number = 22;

var myBool: boolean = false;

var myVar: any = "Hello";
myVar = false;

//Arrays
var StringArray: string[] = ["item1", "item2", "item3"];
var NumberArray: number[] = [1, 2, 3, 4];
var BooleanArray: boolean[] = [true, false, true];
var AnyArray: any[] = [1, 2, true, "hello", [], {}];


// tuple
var strNumTuple: [string, number];
strNumTuple = ["Hello", 22];
strNumTuple = ["World", 245];

// void, undefined, null
// let myVoid: void = undefined;
// let myNull: null = undefined;
// let myUndefined: undefined = undefined;

// Functions
function getAddition(num1: number, num2: number): number {
    return num1 + num2;
}

let myAddition = function (
    num1: number | string,
    num2: number | string): number {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2
}

/*
function getMyName(
    firstName: string,
    lastName?: string): string {
    if (lastName == undefined) {
        return firstName;
    }
    return `${firstName} ${lastName}`;
}

function myVoidFunction(): void {
    return;
}
*/

// Interfaces
interface iTodo {
    title: string;
    text: string;
}
function showTodo(todo: iTodo) {
    console.log(`${todo.title} - ${todo.text}`)
}

let myTodo: iTodo = { title: 'Eat dinner', text: 'lorem' };

showTodo(myTodo);

document.write();

// Classes

class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(
        name: string,
        email: string,
        age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(`${this.name} is registered`)
    }

    showMeAge() {
        return this.age;
    }

    private ageInYears() {
        return this.age + ' years';
    }

    payInvoice() {
        console.log(`${this.name} have paid her/his inovace `)
    }
}

var john = new User('john', 'john@gmail.com', 24);

console.log(john.ageInYears());

class Member extends User {
    id: number;

    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice();
    }
}

var gordon =   new Member(1, 'Gordon', 'gordon@gmail.com', 24);
gordon.payInvoice();

document.write();