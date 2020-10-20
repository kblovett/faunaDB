const app = require('express')();
const faunadb = require('faunadb');
const client = new faunadb.Client();

const {
  Paginate,
  Get,
  Select,
  Match,
  Index,
  Create,
  Collection,
  Var,
  Lambda,
  Join,
} = faunadb.query;

app.listen(5000, () => console.log('API running on http://localhost:5000'));
