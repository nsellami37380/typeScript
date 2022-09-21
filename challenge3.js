var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var Mary = new Person('Mary', 35);
var John = new Person('John', 40);
Mary.tellMyAge();
Mary.tellMyName();
John.tellMyAge();
John.tellMyName();
