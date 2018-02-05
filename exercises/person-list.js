class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class PersonList {
  constructor() {
    this.storage = [];
  }
  addPerson(name, gender) {
    const person = new Person(name, gender);
    this.storage.push(person);
  }
  filterSameGender(gender) {
    return this.storage.filter(person => person.gender === gender);
  }
}

const list = new PersonList();
list.addPerson("sameh", "male");
list.addPerson("samih", "male");
list.addPerson("samih", "female");
list.addPerson("waleed", "male");
list.addPerson("fatma", "female");
list.addPerson("wael", "male");
list.addPerson("alaa", "female");
list.addPerson("amina", "female");
list.addPerson("amin", "male");
console.log(list.filterSameGender("female"));
