import express from 'express';
import userRoutes from './routes/apartmentRoutes';

const app = express();
const port = 3000;
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get("/apartments", userRoutes)
app.get("/apartment/:id", userRoutes)
app.post("/apartments", userRoutes)


app.listen(3000, () => {
  console.log('Hi from port 3000');
});


