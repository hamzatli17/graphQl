const express = require('express');

const mongoose = require("mongoose");
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/graphql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();


app.use(cors());
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});