const express = require('express')
const app = express() //we are using express and storing it in the const app
const PORT = 8000

const rappers = {
    '21 savage': {
        'age':29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age':29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age':29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')//__dirname looks in the same dir as the server.js
})

app.get('/api/:rapperName', (request, response) => {
   const rappersName =  request.params.rapperName.toLowerCase()
    if(rappers[rappersName]) {
        response.json(rappers[rappersName])
    }else {
        response.json(rappers['dylan'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port: ${PORT}. You better go catch it.`)
})
