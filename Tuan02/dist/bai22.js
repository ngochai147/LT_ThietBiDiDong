"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMultipleTodos = fetchMultipleTodos;
async function fetchTodo(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (response.ok) {
            return await response.json();
        }
    }
    catch (error) {
        console.error(`Fetch for ID ${id} failed:`, error);
        throw error;
    }
}
async function fetchMultipleTodos(ids) {
    try {
        const results = await Promise.all(ids.map(id => fetchTodo(id)));
        console.log("Bai 22:", results);
    }
    catch (error) {
        console.error("One of the fetches failed:", error);
    }
}
