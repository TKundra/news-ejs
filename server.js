import express from 'express';
import router from './src/routes/news';

const app = express();
const port = 3000;

// static files
app.use(express.static('public'));

app.use('/css', express.static(__dirname + 'public/css')); // tell static where the /css /images /js are
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/js', express.static(__dirname + 'public/js'));

// template engine
app.set('views', './src/views'); // when views are in different folder we need to specify
app.set('view engine', 'ejs');

// routes
app.use('/', router); // as home page

// server
app.listen(port, () => console.log(`Example app listening on port ${port}`));