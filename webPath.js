import express from 'express';
import { join } from 'path';
const route = express();
import userDetailSchema from './schema.js';
import mongoose from 'mongoose';

const userDetail = new mongoose.model("UserDetail", userDetailSchema);

route.use(express.static('Main Page'));
route.use(express.static('products'));

route.get('/about', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'about/1.html'));
})

route.get('/fans', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'products/fans/fans.html'));
})
route.get('/fridges', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'products/fridges/index.html'));
})

route.get('/induction', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'products/Induction/index.html'));
})

route.get('/music', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'products/music systems/index.html'));
})

route.get('/television', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'products/television/new.html'));
})

route.get('/washingmachine', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'products/washing machine/index.html'));
})

route.get('/login', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', '/login/Login.html'));
})

route.get('/signup', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', '/login/newuser.html'));
})

route.post('/', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'Main Page/mainPage.html'))
})

route.post('/login', async (req, res) => {
    try {
        const user = new userDetail({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: req.body.password,
        })

        const result = await user.save();
        res.sendFile(join(process.cwd(), 'project', '/login/Login.html'))
    } catch (err) {
        console.log(err);
    }
})

route.get('/payment', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', '/PaymentForm/payment.html'));
})

route.get('/home', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'Main Page/mainPage.html'));
})

route.get('/', (req, res) => {
    res.sendFile(join(process.cwd(), 'project', 'Main Page/mainPage.html'));
})



route.use((req, res, next) => {
    const error = new Error('<center><h1>Page Not Found</h1><center>');
    error.status = 404;
    next(error);
});

route.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send('<center><h1>Error : 404 </h1><center>' + err.message);
});

export default route;