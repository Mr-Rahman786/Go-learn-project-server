const express = require('express')
const app = express();
const cors=require('cors')
const port = process.env.PORT || 5000;


app.use(cors());

const corses = require ('./Data/corses.json')

app.get('/', (req, res) => {
    res.send('news api running')
});

app.get('/corses-catagories', (req, res) => {
    res.send(corses)
})
app.get('/corses-catagories/:id', (req, res) => {
    const id = req.params.id;
    // const query = { _id: ObjectId(id) }
    // const courseDetails = corses.findOne(query);
    const courseDetails = corses.find(n => n.id === id);
    res.send(courseDetails);
})

app.listen(port, () => {
    console.log('study more server running on port ', port);
})