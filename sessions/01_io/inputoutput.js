// inputoutput.js

const axios = require('axios');


async function get_stuff() {
  let promises = []
  for (let i=0; i<10; i+=1) {
    console.log('Request', i+1)
    promises.push(axios.get('http://example.com/'))
  }
  console.log('Alle Requests abgefeuert')

  results = await Promise.all(promises)
  for (let result of results) {
    console.log(result.data.substring(0, 10))
  }
  console.log('Wir sind zu Ende')
}

get_stuff()
