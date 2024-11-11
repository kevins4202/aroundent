const express = require('express');
require('dotenv').config();

const Product = require('./models/product');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('dist'))

//implement the CORS config
const cors = require('cors');
app.use(cors());

//function to generate a url for getting a random image from picsum
const fetchImageUrl = () => {
    return `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
};

//implement the get api for getting products
app.get('/api/products', (req, res) => {
    Product.find({}).then((products) => {
        res.json(products);
    });
});

app.post('/api/products', (req, res) => {
    const body = req.body;
    console.log(body)


    if (!body.name || !body.description || !body.price) {
        return res.status(400).json({ error: 'title, description and price are required' });
    }

    const url = fetchImageUrl();

    const product = new Product({
        name: body.name,
        description: body.description,
        price: body.price,
        imageUrl: url
    });

    product.save().then((savedProduct) => {
        res.json(savedProduct);
    });


});

//implement the delete api for deleting a product by Id
app.delete('/api/products/:id', (req, res) => {
    const id = req.params.id;
    Product.findByIdAndDelete(id).then(() => {
        res.status(204).end();
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
