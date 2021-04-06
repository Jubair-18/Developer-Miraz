const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const path = require('path');


const main = app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render(main);
})
app.get("*", (req, res) => {
    res.end("<h1> 404 not found </h1>")
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})