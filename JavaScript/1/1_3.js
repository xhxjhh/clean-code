class Age {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  PersonInfo() {
      console.log(this.name + " is " + this.age + " years old.");
  }
}

let age = new Age("Alice", 30);
age.PersonInfo();
