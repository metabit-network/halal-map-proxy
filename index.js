const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

require('dotenv').config();

const apiKey = process.env.BITMART_API_KEY;
const secret = process.env.BITMART_SECRET;

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200' // or your Angular app's URL
  }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/bitmart/coin', (req, res) => {
    let tokenPrice = 0;
    axios.get('https://api-cloud.bitmart.com/spot/quotation/v3/ticker?symbol=AGF_USDT')
        .then(response => {
            console.log(response.data.data.last)
            if (response.data.data.last) {
                tokenPrice = response.data.data.last
            }
            res.send(tokenPrice)
        })
        .catch(error => {
            res.send(tokenPrice)
        });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
