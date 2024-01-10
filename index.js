const {ApolloServer} = require("apollo-server")
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const connectDB = require('./utils/database')
const server = new ApolloServer({typeDefs, resolvers})
connectDB()
server.listen().then(({url})=>{
    console.log(`Server is running at: ${url}`)
})