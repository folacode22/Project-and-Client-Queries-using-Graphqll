//const {projects, clients} = require('../sampleData.js');

// Mongoose models
const Project = require('../model/Project.js');
const Client = require('../model/Client.js');


const {GraphQLObjectType, GraphQLID, GraphQLString,GraphQLSchema, GraphQLList} = require('graphql');

// Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields:()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        description:{type: GraphQLString},
        status:{type: GraphQLString},
        client:{type:ClientType,
            // resolve(parent, args){return clients.findById(parent.clientId)}
        },
    })
});

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields:()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        email:{type: GraphQLString},
        phone:{type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        projects:{
            type: new GraphQLList(ProjectType),
            resolve(parent, args){
                return Project.find()
                // return projects;
            }

        },
        project:{
            type: ProjectType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                return Project.findById(args.id)
                // return projects.find((project) => project.id  === args.id)  
            }
            //   return projects.find((project) => project.id  === args.id)  
            }

        },

        clients:{
            type: new GraphQLList(ClientType),
            resolve(parent, args){
                return Client.find()
               // return clients;
            }

        },
        client:{
            type: ClientType,
            args:{id:{type: GraphQLID}},
            resolve(parent, args){
                return Client.findById(args.id)
               // return clients.find((client) => client.id  === args.id)
            //   return clients.find((client) => client.id  === args.id)  
            }

        }

    }
)

module.exports = new GraphQLSchema({
    query: RootQuery
})