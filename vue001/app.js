const app = Vue.createApp({
    data(){
        return{
            todoList:[
                {id:1,text:"Vue1",completed:false},
                {id:2,text:"Vue2",completed:false},
                {id:3,text:"Vue3",completed:false},
                {id:4,text:"Vue4",completed:false},
            ]
        }
    },
    methods:{
        addTodo(e){
            this.todoList.push({
                id:Date.now(),
                text:e.target.value,
                completed:false
            })
        },
        deleteTodo(todo){
           this.todoList = this.todoList.filter(i=> i.id !== todo.id)
        }
    },
    computed:{
        countItem(){
            return  this.todoList.filter(t => t.completed).length 
        },
        notCountItem(){
            return this.todoList.filter(t => !t.completed).length
        }
    }
}).mount("#app")