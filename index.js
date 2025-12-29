const express = require('express')
const app = express()
const productRoute= require('./routes/product.route.js')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products", productRoute);


app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001')
});

app.get('/', (req, res) => {
    res.send('Hello, from Emman!')
});

