const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/json', (req, res) =>{
    const jsonData = {
        "Catalog" : {
            "Products" : [
                {
                    "ProductID" : "101",
                    "Name" : "Smartphone",
                    "Category" :  "Electronics",
                    "Price" : 299.99,
                    "Stock" : 25,
                    "Description": "This is a description of Product 1"
                },
                {
                    "ProductID" : "102",
                    "Name" : "Laptop",
                    "Category" :  "Electronics",
                    "Price" : 799.99,
                    "Stock" : 15,
                    "Description": "This is a description of Product 2"
                }
            ]
        }
    };
    res.json(jsonData);
});


app.get('/api/xml', (req, res) => {
    res.set ('Content-Type', 'text/xml');
    const  xmlData = `
    <Catalog>
            <Product ProductID = "101">
                <Name> Smartphone </Name>
                <Category> Electronics </Category>
                <Price> 299.99 </Price>
                <Stock> 25 </Stock>
               </Product>
                    <Product ProductID = "102">
                    <Name> Laptop </Name>
                    <Category> Electronics </Category>
                    <Price> 799.99 </Price>
                    <Stock> 15 </Stock>
                 </Product>
            </Catalog>`;
            res.send(xmlData);
});

app.listen(port, () =>{
    console.log(`Microservice running at http://localhost:${port}`);
});