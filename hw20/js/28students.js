class Human {
    name = null;
    surname = null;
    age = null;

    constructor(person = { name: 'John', surname: 'Doe', age: 30 }) {
        this.name = person.name;
        this.surname = person.surname;
        this.age = person.age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    setFullName(fullName) {
        const [ name, surname ] = fullName.split(' ');

        this.name = name;
        this.surname = surname;
    }
}

class Student extends Human {
    marks = [];

    constructor(person = { name: 'JohnS', surname: 'DoeS', age: 18, marks: [] }) {
        super(person);

        this.marks = person.marks;
    }

    getMarks() {
        return this.marks;
    }
    getAverageMark() {
        return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
    }
    getMinMark() {
        return Math.min(...this.marks);
    }
    getMaxMark() {
        return Math.max(...this.marks);
    }
}

class FakeStudent extends Student {
    #cheatedMarks = [];
    #MAX_MARK = 12;
    #MULTIPLIER = 2;

    constructor(person = { name: 'JohnFS', surname: 'DoeFS', age: 24, marks: [] }) {
        super(person);

        this.#cheatedMarks = this.#cheat();
    }

    #cheat() {
        return this.marks.reduce((cheatedMarks, mark) => {
            const double = mark * this.#MULTIPLIER;
            const target = double > this.#MAX_MARK ? this.#MAX_MARK : double;

            return [...cheatedMarks, target];
        }, [])
    }
    getMarks() {
        return this.#cheatedMarks;
    }
    getAverageMark() {
        return this.#cheatedMarks.reduce((total, mark) => total + mark, 0) / this.#cheatedMarks.length;
    }
    getMinMark() {
        return Math.min(...this.#cheatedMarks);
    }
    getMaxMark() {
        return Math.max(...this.#cheatedMarks);
    }
}

class Teacher extends Human {
    group = [];

    constructor(person = { name: 'JohnT', surname: 'DoeT', age: 35, group: [] }) {
        super(person);

        this.group = person.group;
    }

    getListOfNamesByAverageMark() {
        return [...this.group].sort((studentA, studentB) => studentA.getAverageMark() - studentB.getAverageMark()).map(student => student.name);
    }
    getStudentByName(name) {
        return this.group.find(student => student.name === name);
    }
    removeStudentByName(name){
        this.group = this.group.filter(student => student.name !== name);
    }
    updateStudentByName(name, newStudent) {
        this.group = this.group.map(student => student.name === name ? newStudent : student);
    }
    findFakeStudent() {
        const fakeStudent = this.group.find(student => student instanceof FakeStudent);

        return `${fakeStudent.name} ${fakeStudent.surname} is cheater! The real marks is: ${fakeStudent.marks.toString()}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // init data
    const PERSONS = [
        {
            name: 'Carl',
            surname: 'Smith',
            age: 18,
            marks: [8, 10, 6, 12, 7]
        },
        {
            name: 'Aria',
            surname: 'Johnson',
            age: 18,
            marks: [9, 10, 11, 8, 9, 12 ]
        },
        {
            name: 'Marlowe',
            surname: 'Williams',
            age: 18,
            marks: [12, 11, 8, 9, 7, 5]
        },
        {
            name: 'Eden',
            surname: 'Brown',
            age: 18,
            marks: [12, 11, 8, 9, 9, 11, 5]
        },
        {
            name: 'Frankie',
            surname: 'Jones',
            age: 18,
            marks: [12, 11, 8, 9, 11, 5, 8]
        },
        {
            name: 'Fay',
            surname: 'Garcia',
            age: 18,
            marks: [12, 11, 8, 9, 7, 9, 10]
        }
    ];
    const FAKE_STUDENT =  {
        name: 'Nikita',
        surname: 'Miller',
        age: 19,
        marks: [5, 2, 11, 5, 4, 6, 3, 6, 7, 10]
    };
    const NEW_STUDENT =  {
        name: 'Fay',
        surname: 'Orna',
        age: 20,
        marks: [5, 5, 8, 9, 6, 7, 10, 9, 11]
    };

    // create instances
    const students = PERSONS.reduce((acc, person) => [...acc, new Student(person)], []);
    const fakeStudent = new FakeStudent(FAKE_STUDENT);

    const TEACHER = {
        name: 'Greta',
        surname: 'Wilson',
        age: 35,
        group: [ ...students, fakeStudent ]
    }

    const teacher = new Teacher(TEACHER);

    // OUTPUT
    console.group(`Teacher: ${teacher.getFullName()}`);
    console.log('Group:')

    teacher.group.forEach(student => {
        console.group(`${student.getFullName()}`);
        console.log(`Age: ${student.age}`);
        console.group(`Marks: ${student.getMarks()}`);
        console.log(`Min: ${student.getMinMark()}`);
        console.log(`Max: ${student.getMaxMark()}`);
        console.log(`Average: ${student.getAverageMark()}`);
        console.groupEnd();
        console.groupEnd();
    });

    console.groupEnd();

    const [ studentChange ] = teacher.group;
    const oldName = studentChange.getFullName();

    studentChange.setFullName('Carla Prime');

    console.warn(`New name of ${oldName} is ${studentChange.getFullName()}`);

    console.group('Best students:');
    console.log(teacher.getListOfNamesByAverageMark());
    console.groupEnd();

    console.group('Search Marlowe student by name:');
    console.log(teacher.getStudentByName('Marlowe'));
    console.groupEnd();

    console.group('Remove transgender Carla from group:');

    teacher.removeStudentByName('Carla');

    console.warn(`New group is: ${teacher.getListOfNamesByAverageMark().toString()}`);
    console.groupEnd();

    console.group('Update student Fay:');
    console.log('Old info:', teacher.getStudentByName('Fay'));

    teacher.updateStudentByName('Fay', new Student(NEW_STUDENT));

    console.log('New info:', teacher.getStudentByName('Fay'));
    console.groupEnd();

    console.error(`Cheater detected: ${teacher.findFakeStudent()}`);
});