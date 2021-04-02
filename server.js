const express = require('express');
const routes = require('./routes/routes');
const path = require('path');

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, "./static")));
app.use('/api', routes);

app.listen(port, ()=>{
    console.log(`app listening at port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
})