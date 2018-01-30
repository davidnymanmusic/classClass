class Person {
  constructor(name = "Anonymous", age = "Unknown", location = "some place") {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  hasAge() {
    return !!this.age;
  }
  hasLocation() {
    return !!this.location;
  }
  describePerson() {
    if (this.hasAge() && this.hasLocation()) {
      return `${this.name} is ${this.age} years old and live in ${this.location}.`
    } else {
      return `${this.name} is a person, but we don't know much about them.`
    }
  }
}

class Student extends Person {
  constructor(name, age, location, major) {
    super(name, age, location);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  describePerson() {
    let description = super.describePerson();
    if (this.hasMajor()) {
      description += ` They are studying ${this.major}`
    } else {
      description += ` They are undecided in what they want to study`
    }
    return description
  }
}

console.log(`Here is what's going on behind the scenes`);
console.log(Person);
console.log(Student);
console.log(`Each input is taking in information to create a new Student`);

const me = new Person('David', 29, 'NYC');
const stranger = new Person();
console.log(`This is an example of a Person: `, me);
console.log(`This is example of a default Person:`, stranger);
const meStudent = new Student('David', 29, 'NYC', 'Web Development.');
const otherStudent = new Student();
console.log(`This is an example of a Student: `, meStudent);
console.log(`This is a description of Student with a major:`, meStudent.describePerson());
console.log(`This is a description of Student WITHOUT a major:`, otherStudent.describePerson());

let myName = document.getElementById('myName')
let info = document.getElementById('info')
let body = document.querySelector('body')
let labels = document.querySelectorAll('label')
let please = document.getElementById('please')
let inputName = document.getElementById('name')
let inputAge = document.getElementById('age')
let inputLocation = document.getElementById('location')
let inputMajor = document.getElementById('major')
let button = document.querySelector('button')

let goAway = [
  please,
  inputName,
  inputAge,
  inputAge,
  inputLocation,
  inputMajor,
  button
]

function process() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const location = document.getElementById("location").value.toUpperCase();
  const major = document.getElementById("major").value;

  const newStudent = new Student(name, age, location, major)
  myName.innerText = newStudent.describePerson();
  // myName.innerText = `Hello ${newStudent.name}. You are ${newStudent.age} years old. You live in ${newStudent.location}. Are you excited to be studying ${newStudent.major}?`;
  console.log(`Here is your new student:`, newStudent);
  body.style.backgroundColor = "rgb(46, 46, 46)"
  body.classList.add('border');
  for (let i = 0; i < goAway.length; i++) {
    goAway[i].classList.add('none')
  }
  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.add('none')
  }
  return false;
}
