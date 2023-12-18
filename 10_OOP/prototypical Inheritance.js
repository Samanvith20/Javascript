// prototypical Inheritance
// It is defined as a where it can inherit the properties and methods from another object.
// example
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
// Here Teacher is using the properties of User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)