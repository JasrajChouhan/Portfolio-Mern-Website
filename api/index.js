import app from "./app.js";
import dbConnection from "./db/databaseConnection.js";
import userRoute from './route/user.route.js'
import { ErrorMiddleware } from "./middlewares/error.js";
import contactUsRouter from './route/contactUs.route.js'
import blogRouter from './route/blog.route.js'
import path from 'path'
import express from 'express'
const port  = process.env.PORT || 5000;

app.use('/api/v1/user' , userRoute);
app.use('/api/v1/contactus' , contactUsRouter)
app.use('/api/v1/blog' , blogRouter)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname , '/client/dist')));

app.get('*' , (req, res) => {
    res.sendFile(path.join(__dirname , 'client' , 'dist' , 'index.html' ))
})




dbConnection();
app.use(ErrorMiddleware)
app.listen(port , () => {
    console.log( `Server is running on port ${port}`);
})

