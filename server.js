// var {graphql,buildSchema} = require("graphql");
// //const { Source } = require('graphql');


// // Construct Schema using graphQl query language
// var schema =  buildSchema
// (` 
//     type Query{
//       hello : String,
//       name: String
//     }
// `)

// //The rootvalue provides a resolver function for each API endpoint
// var rootValue = {
//     hello(){
//         return "hello world"
//     }
// }

// //run graphql query
// graphql({
//     schema,
//     source:"{ hello }",
//     rootValue
// }).then(response =>{
//     console.log(response)
// })

var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)
 
// The root provides a resolver function for each API endpoint
var root = {
  hello() {
    return "Hello worldsss!"
  },
}
 
var app = express()
 
// Create and use the GraphQL handler.
app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root
  })
)
 
// Start the server at port
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")