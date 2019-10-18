// CODE here for your Lambda Classes
class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
    }

    speak() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(childAtts) {
        super(childAtts);
        this.specialty = childAtts.specialty;
        this.favLanguage = childAtts.favLanguage;
        this.catchPhrase = childAtts.catchPhrase;
    }

    demo(subject) {
        console.log(`Today, we are learning about ${subject}.`);
    }

    grade(student) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(childAtts) {
        super(childAtts);
        this.previousBackground = childAtts.previousBackground;
        this.className = childAtts.className;
        this.favSubjects = childAtts.favSubjects;
    }

    listsSubjects() {
        console.log(this.favSubjects);
    }

    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    } 
}

class ProjectManager extends Instructor {
    constructor(gcAtts) {
        super(gcAtts);
        this.gradClassName = gcAtts.gradClassName;
        this.favInstructor = gcAtts.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel} @channel standy times!`);
    }

    debugsCode(student, subject) {
            console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const emerson = new Instructor({
    name: 'Emerson',
    age: 32,
    location: 'Dalls, TX',
    specialty: 'Javascript',
    favLanguage: 'English',
    catchPhrase: 'How are you, man?',
})

console.log(emerson.name);
emerson.demo('callbacks');