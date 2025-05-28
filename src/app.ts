import express from 'express';
import 'dotenv/config';
import webRoutes from "./routes/web";
const app = express();
const PORT = process.env.PORT || 3000;

//config view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

//config routes
webRoutes(app);

//config static files
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})
