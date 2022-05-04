var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World!!");
//types 
var myString = "Hello World!!";
myString = 22 + "";
var myNumber = 22;
var myBool = false;
var myVar = "Hello";
myVar = false;
//Arrays
var StringArray = ["item1", "item2", "item3"];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false, true];
var AnyArray = [1, 2, true, "hello", [], {}];
// tuple
var strNumTuple;
strNumTuple = ["Hello", 22];
strNumTuple = ["World", 245];
// void, undefined, null
// let myVoid: void = undefined;
// let myNull: null = undefined;
// let myUndefined: undefined = undefined;
// Functions
function getAddition(num1, num2) {
    return num1 + num2;
}
var myAddition = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function showTodo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
var myTodo = { title: 'Eat dinner', text: 'lorem' };
showTodo(myTodo);
document.write();
// Classes
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered"));
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.ageInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " have paid her/his inovace "));
    };
    return User;
}());
var john = new User('john', 'john@gmail.com', 24);
console.log(john.ageInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, 'Gordon', 'gordon@gmail.com', 24);
gordon.payInvoice();
document.write();
