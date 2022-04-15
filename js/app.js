import {set, ref, get } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
import { database } from './db.js'



function writeTodoData(todoId, title, description, priority, time) {

    set(ref(database, 'todos/' + todoId), {
        title: title,
        description: description,
        priority: priority,
        status: false,
        time: time
    });
}
// writeTodoData(1, "Play Game", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "is-info", "15:00")

function getTodoData() {
    get(
        ref(database, `todos/`)
    ).then(
        data => {
            console.log(data.val())
        }
    )
}
// getTodoData()
const app = new Vue({
    el: "#app",
    data() {
        return {
            showTodos: false,
            showHome: true,
            showForm: false,
            // Add todo 
            title: "",
            description: "",
            status: false,
            priority: "",
            added: "00:00",
            todos: [],
            doned: []
        }
    },
    methods: {
        showTodoList() {
            this.showHome = false;
            this.showForm = false;
            this.showTodos = true;
        },
        showAddForm() {
            this.showHome = false;
            this.showForm = true;
            this.showTodos = false;
        },
        getPriority(todo) {
            return todo.priority
        },
        // ADD TODO 
        addTodo() {
            writeTodoData(
                this.getTodosCount + 1,
                this.title,
                this.description,
                this.priority,
                this.getTimeNow

            )
            this.todos.push({
                id: this.getTodosCount + 1,
                title: this.title,
                description: this.description,
                status: false,
                priority: this.priority,
                added: this.getTimeNow
            });
            return this.showTodoList()
        },
        // Complete TODO 
        todoDone(todo) {
            todo.status = true
            this.doned.push(todo)
            this.todos.splice(this.todos.indexOf(todo), 1)
        },
        // DELETE TODO 
        deleteTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        },
        // DELETE DONED TODO 
        deleteDonedTodo(todo) {
            this.doned.splice(this.todos.indexOf(todo), 1)
        },
    },
    computed: {
        getTodosCount() {
            return this.todos.length
        },
        getDonedTodosCount() {
            return this.doned.length
        },
        getTimeNow() {
            return new Date().toLocaleTimeString();
        },

    }
});