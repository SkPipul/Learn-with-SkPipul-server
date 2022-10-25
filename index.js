const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('Course is started YAY!!');

})

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log("learn with skpipul server is running on port", port);
})