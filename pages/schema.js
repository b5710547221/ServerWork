import { makeExecutableSchema } from 'graphql-tools';
import connectMongo from './mongo-conector'
const prepare = (o) => {
  o._id = o._id.toString()
  return o
}
const typeDefs =[ `
type data_1 {
   id: ID!     
   idNo: String 
   image: String          # "!" denotes a required field
   name: String
   score: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
  data : [data_1]    # "[]" means this is a list of channels
}
`];  
const resolvers ={
    Query:{
      data: async(root,{id}) => {
        return prepare(await connectMongo.findOne(ObjectId(id)))
      }
    },
    data_1:{

    }
}
export default makeExecutableSchema({ typeDefs ,resolvers});
