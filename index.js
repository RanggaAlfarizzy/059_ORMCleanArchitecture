const express = require('express');
const connectToDatabase = require('./config/db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

async function startServer() {
    await connectToDatabase();
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();