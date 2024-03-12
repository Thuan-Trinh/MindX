const studentAlice = {
name: 'Alice',
age: 20,
};

const studentBob = studentAlice;

console.log('Alice info:', studentAlice);
console.log('Bob info:', studentBob);

studentBob.name = 'Bob';

console.log('Bob info:', studentBob);
