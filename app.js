const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');
// const mongoose = require('mongoose');
const db = require('./config/connection');
const helpers = require('./functions/helper')
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout/' }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

db.connect((err => {
    if (err) console.log("Database error");
    else console.log("Database connected");
}))





app.get('/', (req, res) => {


    helpers.getItem().then((items) => {
        var dt = new Date();
        var day = dt.toLocaleDateString()
        console.log("items", items);
        res.render('home', { items, day });
    })
});
app.post('/', (req, res) => {
    helpers.addItem(req.body).then((response) => {
        res.redirect('/')
    });
});

app.get('/remove-item/:id', (req, res) => {
    let itemId = req.params.id;
    helpers.removeItem(itemId).then((response) => {
        res.redirect('/')
    })
})
















app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
})

module.exports = app;