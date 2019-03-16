var time = new Date()
var day_list = ['日', '一', '二', '三', '四', '五', '六'];
var today = `${time.getFullYear()}.${time.getMonth()+1}.${time.getDate()}(${day_list[time.getDay()]})`


var app = new Vue({
  el: '#app',
  data: {
    newTodo: '', //輸入框
    todos: [
      {
        id : '001',
        title: 'Vue一個Todolist吧！',
        time: today,
        completed: false
      }
    ],
    visi: 'all',
    cacheTodo:{},
    cacheTitle:''
  },
  methods:{
    addTodo: function(){
      var value = this.newTodo.trim();
      var id = Math.floor(Date.now());
      if(!value) return
      this.todos.push({
        id : id,
        title: value,
        time: today,
        completed: false
      })
      this.newTodo = ''
    },
    removeTodo: function(todo){
      //修改前
      //this.todos.splice(index,1)
      //修改後-2018.07.12
      var newIndex = ''
      var vm = this
      vm.todos.forEach(function(item,key){
        if(todo.id===item.id){
          newIndex = key
        }
      })
      vm.todos.splice(newIndex,1)
    },
    editTodo: function(item){
      this.cacheTitle = item.title
      this.cacheTodo = item
    },
    doneEdit: function(item){
      item.title = this.cacheTitle
      this.cacheTodo = {}
    },
    cancelEdit: function(){
      this.cacheTodo = {}
    },
    clearAll: function(){
      var r = confirm('確認要清除全部待辦事項?')
      if(r){
        this.todos= []
      }
    }
  },
  computed:{//過濾後的資料
    filter: function() {
      var newTodos = [];
      switch (this.visi) { //要判斷的東西
        case 'ing': //條件
          newTodos = this.todos.filter(function(item) {
          return !item.completed //false
          //過濾出false的item,return到newsTodos
          })
          return newTodos
          break;
        case 'done':
          newTodos = this.todos.filter(function(item) {
          return item.completed //true
          })
          return newTodos
          break;
        case 'all':
          return this.todos;
          break;
      }
    },
    done: function(){
      var done = []
      done = this.todos.filter(function(item){
        return item.completed
      })
      return done.length 
    },
    remain: function(){
      var remain = []
      remain = this.todos.filter(function(item){
        return !item.completed
      })
      return remain.length
    },
    process: function(){
      if(this.todos.length<=0){
        return 0
      }
      return Math.floor(this.done/this.todos.length*100) + '%'
    }
  }
})

//References 
//https://codepen.io/icguanyu/pen/ZRbaPN