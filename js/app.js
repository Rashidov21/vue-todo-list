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
            todos: [{
                    id: 1,
                    title: "Play Game",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores iste dolores mollitia? Dolor, quam.",
                    priority: "is-info",
                    date: "13:00",
                    status: false
                },
                {
                    id: 2,
                    title: "Play PS5",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores iste dolores mollitia? Dolor, quam.",
                    priority: "is-primary",
                    date: "11:00",
                    status: false
                },
                {
                    id: 3,
                    title: "Play Hard",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores iste dolores mollitia? Dolor, quam.",
                    priority: "is-danger",
                    date: "15:00",
                    status: false
                }
            ],
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
        // getPriority(todo) {
        //     return todo.priority
        // }
    }
});