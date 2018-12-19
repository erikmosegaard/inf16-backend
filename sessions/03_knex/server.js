let bodyParser = require('body-parser')
let express = require('express')
var pretty = require('express-prettify');

// Create Express app
let app = express()
app.use(bodyParser.json());
app.use(pretty({ query: 'pretty' }));

// Init DB connection
let knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./todos.sqlite"
  }
});

// List all todos
app.get('/api/todos/', async function(request, response) {
  try {
    let result = await knex('todo')
    response.json(result)
  } catch (error) {
    console.log(error)
    response.status(500).send('ERROR')
  }
})

// Create new todo
app.post('/api/todos/', async function(request, response) {
  newTodo = {
    text: request.body.text,
    done: false
  }
  try {
    let result = await knex('todo').insert(newTodo)
    newTodo.id = result[0]
    response.json(newTodo)
  } catch (error) {
    console.log(error)
    response.status(500).send('ERROR')
  }
})

// Update todo
app.put('/api/todos/:id', async function(request, response) {
  try {
    let result = await knex('todo').where(request.params)
                                   .update(request.body)
    response.json(result)
  } catch (error) {
    console.log(error)
    response.status(500).send('ERROR')
  }
})

// Delete todo
app.delete('/api/todos/:id', async function(request, response) {
  try {
    let result = await knex('todo').where(request.params).delete()
    response.json(result)
  } catch (error) {
    console.log(error)
    response.status(500).send('ERROR')
  }
})

app.listen(3000)
