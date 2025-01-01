var {graphql,buildSchema} = require("graphql");
//const { Source } = require('graphql');


// Construct Schema using graphQl query language
var schema =  buildSchema
(` 
    type Query{
      hello : String,
      name: String
    }
`)

//The rootvalue provides a resolver function for each API endpoint
var rootValue = {
    hello(){
        return "hello world"
    }
}

//run graphql query
graphql({
    schema,
    source:"{ hello }",
    rootValue
}).then(response =>{
    console.log(response)
})

