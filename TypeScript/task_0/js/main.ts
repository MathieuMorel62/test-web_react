// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Paris"
};

// Create another student
const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Lyon"
};

// Create a list of students
const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");

// Add each student to the table
studentsList.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
