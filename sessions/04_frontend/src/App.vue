<template>
  <div id="app">
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id" :class="todo" >
        <span @click="toggle(todo)">{{todo.text}}</span>
        &nbsp;<button @click="remove(todo)">x</button>
      </li>
    </ul>
    <input type="text"
           @keyup.enter="save(todoText)"
           @keyup.esc="todoText = ''"
           v-model="todoText"
           placeholder="New todo">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      todoText: ''

    }
  },
  methods: {
    async save(text) {
      let result = await axios.post('/api/todos/', {text})
      this.todos.push(result.data)
      this.todoText = ''
    },
    async toggle(todo) {
      todo.done = !todo.done;
      await axios.put('/api/todos/' + todo.id, {done: todo.done})
    },
    async remove(todo) {
      await axios.delete('/api/todos/' + todo.id)
      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  },
  async created() {
    let result = await axios.get('/api/todos/')
    this.todos = result.data
  }
}
</script>

<style>
li.done span {
  text-decoration: line-through;
}
li button {
  padding: 2px;
  background-color: white;
}
</style>
