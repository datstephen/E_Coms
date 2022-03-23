const express = require('express');
const mongoose = require('mongoose');

const config = require('config');
//We will add the path package for routing.

const app = express();
app.use(express.json());



const dbURI = config.get('dbURI');
const port = process.env.PORT || 4000;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
  .catch((err) => console.log(err));
