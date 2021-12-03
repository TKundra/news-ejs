import express from 'express';
import axios from 'axios';
require('dotenv').config();

const router = express.Router();
const key = process.env.API_KEY;

router.get('/', async(req, res) => {
    try {
        await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`)
        .then((response) => res.render('news', {articles: response.data.articles}))
    } catch (error) {
        console.log(error.message);
    }
})

export default router;