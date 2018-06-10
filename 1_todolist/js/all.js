var app = new Vue ({
    el: '#app',
    data:{
        newTodo: '',
        visibility: 'all',
        todos: [
            {
                id: '123',
                title: 'test',
                completed: false,
                important: false
            },
            {
                id: '234',
                title: 'test1111',
                completed: true,
                important: true
            }
        ],
    },

    methods: {
        addTodo: function() {
            var value = this.newTodo.trim();
            var timestamp = Math.floor(Date.now());
            console.log(value, timestamp);

            if(!value){
                return;
            }

            this.todos.push({
                id: timestamp,
                title: value,
                completed: false,
                important: false
            })
        },

        addMark: function(key) {
            if(this.todos[key].important){
                this.todos[key].important = false;
            }else{
                this.todos[key].important = true;
            }
        }
    },

    computed: {
        filteredTodos: function() {
            if(this.visibility == 'all'){
                return this.todos;
             } else if(this.visibility == 'active'){
                 var newTodos = [];
                 this.todos.forEach(function(item){
                     if(!item.completed){
                       newTodos.push(item);
                     }
                 })     
                 return newTodos;
             } else if(this.visibility == 'completed'){
                 var newTodos = [];
                 this.todos.forEach(function(item){
                     if(item.completed){
                       newTodos.push(item);
                     }
               })     
               return newTodos;
             }
        }
    }
});