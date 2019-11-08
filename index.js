//** request */
const request = require('request');
//** express */
const express = require('express');
//** bodyParser **
const bodyParser = require('body-parser');
//** Init app on express */
const app = express();
//** Config bodyParser */
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//** Post */
function crear () {
    let author = {
        name: "Oscar",
        last_name: "Martinez",
        nacionalidad: "MX",
        biography: ":) <3",
        gender: "M",
        age: 26,
        is_alive: true
    }           
    request.post({url:'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', form: author}, (request, response, body) => {
        let bodyToJson = JSON.parse(body);
     console.log(bodyToJson);
    })
}

// request.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors', (err,response,body) =>{
//     let bodyToJson = JSON.parse(body);
//     console.log(bodyToJson());
// })

crear();

