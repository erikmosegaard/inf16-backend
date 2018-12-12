## Installation

```
npm install nodemon express body-parser express-prettify
```

## Run

```
nodemon
```

## Test

Get:
```
curl localhost:3000/api/todos/?pretty
```

Create:
```
curl --request POST  --data '{"text": "Aufräumen"}' --header "Content-Type: application/json" http://localhost:3000/api/todos/?pretty
```

Update:
```
curl --request PUT  --data '{"done": true}' --header "Content-Type: application/json" http://localhost:3000/api/todos/1?pretty
```

Delete:
```
curl --request DELETE http://localhost:3000/api/todos/1?pretty
```
