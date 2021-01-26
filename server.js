const express = require('express')
const connectDB = require('./config/db')

// Connect to DB
connectDB()

// Route files
const dev_ops = require('./routes/dev_route')

const app = express()

app.use(express.json())

// Mount router
app.get('/dev',dev_ops)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});


// For unhandledrejection
process.on('unhandledRejection',(err,promise) => {
    console.log(`Error:${err.message}`.red);
    //Close server and exit process
    server.close(() => process.exit(1));
});