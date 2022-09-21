class  Person {
    private  name:  string;

    private  age:  number;

    constructor(name:  string, age:  number) {
        this.name  =  name;
        this.age  =  age;
    }
    public tellMyName ():  void {
        console.log(`I am ${this.name}` );
        
    }

    public tellMyAge():  void {
        console.log(`I am ${this.age} years old` );
    }
    
}

const  Mary  =  new  Person('Mary', 35);
const  John  =  new  Person('John', 40);

Mary.tellMyAge();
Mary.tellMyName();
John.tellMyAge();
John.tellMyName();
