const app = new Vue({
    el:"#app",
    data(){
        return {
            showTodos:false,
            showHome:true,
            showForm:false,
            // Add todo 
            title:"",
            description:"",
            status:false,
            priority:"",
            added:"00:00",
            todos:[
                {
                    id:1,
                    title:"Play Game",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores iste dolores mollitia? Dolor, quam.",
                    status:true,
                    priority:'is-danger',
                    added:"16:23:38"
                },

            ]
        }
    },
    methods:{
        showTodoList(){
            this.showHome = false;
            this.showForm = false;
            this.showTodos = true;
        },
        showAddForm(){
            this.showHome = false;
            this.showForm = true;
            this.showTodos = false;
        },
        // ADD TODO 
        addTodo(){
            this.todos.push(
                {
                    id:this.getTodosCount + 1,
                    title:this.title,
                    description:this.description,
                    status:false,
                    priority:this.priority,
                    added:this.getTimeNow
                }
            );
            return this.showTodoList()
        }
    },
    computed:{
        getTodosCount(){
            return this.todos.length
        },
        getTimeNow(){
            return new Date().toLocaleTimeString();
        }
    }
});

let data = new Date();
console.dir(data.toLocaleTimeString())