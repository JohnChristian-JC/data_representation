const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Route to fetch JSON data from GitHub
app.get('/api/json', async (req, res) => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/JohnChristian-JC/data_representation/main/jsonData.json');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching JSON data');
    }
});

// Route to fetch XML data from GitHub
app.get('/api/xml', async (req, res) => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/JohnChristian-JC/data_representation/main/xmlData.xml', {
            headers: { 'Accept': 'application/xml' }
        });        
        res.set('Content-Type', 'text/xml');
        res.send(response.data);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send('Error fetching XML data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
