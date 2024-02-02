
const express = require('express');
const mongoose = require('mongoose');
const restRouter = require('./routers/restRouter');
const graphqlRouter = require('./routers/graphqlRouter');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', restRouter);
app.use('/api', graphqlRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
