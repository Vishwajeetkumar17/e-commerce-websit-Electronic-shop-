import express from 'express'
import route from './webPath.js'
const port = process.env.PORT || 3000;
const app = express();
const router = route;
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/tarangUser").then(() => {
    console.log("Connection Successfull")
}).catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }))

app.use(express.static('project'));
app.use(express.static('Main Page'));

app.use("/", router);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})









