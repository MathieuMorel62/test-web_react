/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const cTeacher: Subjects.Teacher = {
	firstName: 'Guillaume',
	lastName: 'Salva',
	experienceTeachingC: 10,
	experienceTeachingJava: 10,
	experienceTeachingReact: 0
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
