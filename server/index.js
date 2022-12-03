// LIB Imports
const express = require('express');
const mongoose = require('mongoose');
// File Imports
const authRouter = require('./routes/auth.js');
const productRouter = require('./routes/product.js');
const adminRouter = require('./routes/admin.js');
const userRouter = require('./routes/user.js');

// Init
const PORT = process.env.PORT || 3000;
const app = express();
const DB = "mongodb+srv://Ema:slammine@cluster0.56scdqv.mongodb.net/?retryWrites=true&w=majority"
// MiddleWare
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch(e =>{
    console.log(e);
});

// API
// GET, PUT , POST, DELETE, UPDATE => CRUD (Create, Read, Update, Delete)

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`);
});
