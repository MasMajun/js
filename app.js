const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const siswaroutes = require('./routes/siswaroutes');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use('/api', siswaroutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});