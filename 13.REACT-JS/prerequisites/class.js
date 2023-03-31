// In JS there is nothing like class , Its just a template in JS

// Inheritance and Super

class Person {
    constructor(name, age) {
      (this.name = name), 
      (this.age = age);
    }

    welcome(){
        console.log('Hello ' + this.name + ' of age ' + this.age)
    }
}

// inherited  
class Teacher extends Person {
    constructor(name , age ,classStrength) {
      super(name, age);
      this.classStrength = classStrength;
    }

    hello(){
      super.welcome() // func inherited from person
  }
}
  
// inherited
class Student extends Person {
    constructor(name, age, cgpa) {
      super(name, age);
      this.cgpa = cgpa;
    }

    hello(){
        super.welcome() // func inherited from person
    }
}

  
let person1 = new Person("Adam", 25);
let teacher1 = new Teacher("Steve", 40, 100);
let student1 = new Student("Mark", 21, 8.0);

person1.welcome()
teacher1.hello()
student1.hello()

console.log(person1);
console.log(teacher1);
console.log(student1);