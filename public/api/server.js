import { ApolloServer } from 'apollo-server-express';
import gql from 'graphql-tag';
import express from 'express';

// Definir el esquema GraphQL
const typeDefs = gql`
  type Definition {
    id: ID!
    content: String!
    publishedAt: String!
  }

  type Concept {
    id: ID!
    name: String!
    definitions: [Definition!]
    concepts: [Concept!]
    publishedAt: String!
  }

  input DefinitionInput {
    content: String!
    publishedAt: String
  }

  input ConceptInput {
    name: String!
    definitions: [ID!]
    concepts: [ID!]
    publishedAt: String
  }

  type Query {
    getConcepts: [Concept!]
    getDefinitions: [Definition!]
  }

  type Mutation {
    createDefinition(data: DefinitionInput!): Definition!
    updateDefinition(id: ID!, data: DefinitionInput!): Definition!
    deleteDefinition(id: ID!): Boolean!

    createConcept(data: ConceptInput!): Concept!
    updateConcept(id: ID!, data: ConceptInput!): Concept!
    deleteConcept(id: ID!): Boolean!
  }
`;

// Datos en memoria para pruebas
let definitions = [];
let concepts = [];

// Resolver funciones
const resolvers = {
  Query: {
    getConcepts: () => concepts,
    getDefinitions: () => definitions,
  },
  Mutation: {
    createDefinition: (_, { data }) => {
      const newDefinition = {
        id: `${definitions.length + 1}`,
        ...data,
        publishedAt: data.publishedAt || new Date().toISOString(),
      };
      definitions.push(newDefinition);
      return newDefinition;
    },
    updateDefinition: (_, { id, data }) => {
      const definition = definitions.find((d) => d.id === id);
      if (!definition) throw new Error('Definition not found');
      Object.assign(definition, data);
      return definition;
    },
    deleteDefinition: (_, { id }) => {
      const index = definitions.findIndex((d) => d.id === id);
      if (index === -1) throw new Error('Definition not found');
      definitions.splice(index, 1);
      return true;
    },
    createConcept: (_, { data }) => {
      const newConcept = {
        id: `${concepts.length + 1}`,
        ...data,
        definitions: data.definitions || [],
        concepts: data.concepts || [],
        publishedAt: data.publishedAt || new Date().toISOString(),
      };
      concepts.push(newConcept);
      return newConcept;
    },
    updateConcept: (_, { id, data }) => {
      const concept = concepts.find((c) => c.id === id);
      if (!concept) throw new Error('Concept not found');
      Object.assign(concept, data);
      return concept;
    },
    deleteConcept: (_, { id }) => {
      const index = concepts.findIndex((c) => c.id === id);
      if (index === -1) throw new Error('Concept not found');
      concepts.splice(index, 1);
      return true;
    },
  },
};

// Inicializar Express
const app = express();

// Crear una instancia del servidor Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}${server.graphqlPath}`);
  });
}

// Iniciar el servidor
startServer();
