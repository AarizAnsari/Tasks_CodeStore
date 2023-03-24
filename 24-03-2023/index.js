const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const url = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(url);
const database = client.db("Ecom").collection('products');
const cors = require('cors');

app.use(cors({
    origin : "*"
}));


app.get('/products',async (req,res) => {
    const page = req.query.page;
    const size = req.query.size;
    const elements = Math.floor(size/120);
    const initial_page = (page*elements)-elements; 
    const products = await database.find().toArray();
    
    console.log(elements);
    res.send(products.splice(initial_page,elements));
})

app.listen(3005,async () => {
    await client.connect();
});
