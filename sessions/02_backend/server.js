let bodyParser = require('body-parser')
let express = require('express')
var pretty = require('express-prettify');



let app = express()
app.use(bodyParser.json());
app.use(pretty({ query: 'pretty' }));

let todos = [
  {id: 1, text: 'Einkaufen', done: false},
]
let todo_last_id = 1


// List all todos
app.get('/api/todos/', function(request, response) {
  response.json(todos)
})

// Create new todo
app.post('/api/todos/', function(request, response) {
  console.log('POST', request.body)
  newTodo = {
    id: todo_last_id + 1,
    text: request.body.text,
    done: false
  }

  todo_last_id += 1

  todos.push(newTodo)

  response.json(newTodo)
})

// Update todo
app.put('/api/todos/:id', function(request, response) {
  console.log(request.params.id)
  response.json({})
})

// Delete todo
app.delete('/api/todos/:id', function(request, response) {
  console.log(request.params.id)
  response.json({})
})

app.listen(3000)
