const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/aut-routes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json({extended: false}));

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(result => app.listen(PORT, () => console.log(`server running at port ${PORT}.....`)));