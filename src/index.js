const express = require("express");
require("./db")
const Product = require("./models")

const app = express();
app.use(express.json());

    //CRUDE APP
    // to add new program to database (CREATE)

app.post('/api/products', async (req, res) => {
    try{
        const product = new Product({
            name: req.body.name,
            email: req.body.email
        })
        await product.save();
        return res.status(201).send(product);
    } catch (e) {
        return res.status(500).send("ERROR")
    }
});

     //to find all the data of database (READ)

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).send(products);
    } catch (e) {
        return res.status(500).send("ERROR")
    }
})

     //to update the product of database (UPDATE)

app.patch('/api/products/:id',async (req, res) => {
    const _id = req.params.id
    try {
        const products = await Product.findByIdAndUpdate(_id, req.body)
        if(products) {
            const productUpdated = await Product.findById(_id);
            return res.status(200).send(productUpdated)
        } 
        else{
            return res.status(400).send("FAIL");
        }
    } catch(e) {
       return res.status(500).send(e) 
    }
})

    //to delete any  program with given specific id (DELETE)

app.delete('/api/products/:id', async (req, res) => {
    const _id = req.params.id;
    try{
        const product = await Product.findByIdAndDelete(_id);
        if(product) {
            return res.status(400).send("DELETED")
        }
        return res.send("FAIL");
    } catch (e) {
        return res.status(500).send(e)
    }
})

app.listen(3000, () => {console.log("ready")}) //just to check it's ready or not