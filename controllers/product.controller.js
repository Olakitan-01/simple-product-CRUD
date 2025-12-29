const { randomUUID } = require('crypto');

let Products = [];

const getProducts = (req, res) => {
    res.status(200).json(Products);
}

const getProduct = async (req, res) =>{
    const {id} = req.params;

    const product = products.find(p => p._id === id);
    if(!product){
        res.status(400).json({message: "Product not found"});
    }
    res.status(200).json(product);
    
};


const createProduct = async (req, res) => {
    const {name, quantity, price, description} = req.body;
    if(!name || !quantity || !price || !description){
        return res.status(400).json({message: "All fields are required"});
    }
        const newProduct = {
            id: randomUUID(),
            name,
            quantity: quantity || 0,
            price,
            description
        };
        products.push(newProduct);
        res.status(201).json({message: "Product created successfully", product: newProduct});
};

const updateProduct = (req, res) => {
    const { id } = req.params;

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product does not exist" });
    }

    const { name, quantity, price, description } = req.body;

    if (name !== undefined) product.name = name;
    if (quantity !== undefined) product.quantity = quantity;
    if (price !== undefined) product.price = price;
    if (description !== undefined) product.description = description;

    res.status(200).json(product);
};


const deleteProduct = (req, res) => {
    const { id } = req.params;

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product does not exist" });
    }

    products.splice(index, 1);

    res.status(200).json({ message: "Product deleted successfully" });
};


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};