"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(s) {
        this.students.push(s);
    }
    addTeacher(t) {
        this.teachers.push(t);
    }
    displayInfo() {
        console.log("--- Students ---");
        this.students.forEach(s => s.display());
        console.log("--- Teachers ---");
        this.teachers.forEach(t => t.display());
    }
}
exports.School = School;
