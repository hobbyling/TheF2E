var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        visibility: 'all',
        todos: [
            {
                id: '001',
                title: 'lunch dating',
                date: '2018-06-10',
                comment: 'with Aaron',
                file: '',
                completed: false,
                important: false
            },
            {
                id: '002',
                title: 'bank',
                date: '2018-06-12',
                comment: '',
                file: 'aaa.zip',
                completed: false,
                important: true
            },
            {
                id: '003',
                title: 'hair cut',
                date: '',
                comment: '',
                file: '',
                completed: true,
                important: false
            }
        ],
    },

    methods: {
        addTodo: function () {
            var value = this.newTodo.trim();
            var timestamp = Math.floor(Date.now());
            console.log(value, timestamp);

            if (!value) {
                return;
            }

            this.todos.push({
                id: timestamp,
                title: value,
                completed: false,
                important: false
            })
        },

        addMark: function (key) {
            if (this.todos[key].important) {
                this.todos[key].important = false;
            } else {
                this.todos[key].important = true;
            }
        }
    },

    computed: {
        filteredTodos: function () {
            if (this.visibility == 'all') {
                return this.todos;
            } else if (this.visibility == 'active') {
                let newTodos = [];
                this.todos.forEach(function (item) {
                    if (!item.completed) {
                        newTodos.push(item);
                    }
                })
                return newTodos;
            } else if (this.visibility == 'completed') {
                let newTodos = [];
                this.todos.forEach(function (item) {
                    if (item.completed) {
                        newTodos.push(item);
                    }
                })
                return newTodos;
            }
        },

        completedTodosNum: function () {
            let count = 0;
            let num = this.todos.length;

            for (let i = 0; i < num; i++) {
                if (this.todos[i].completed === false) {
                    count++;
                }
            }
            return count;
        }
    }
});