import { StockResolver } from "./resolvers/StockResolver";
import { MyContext } from "./types";
import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

const main = async () => {
  // init MikroOrm ORM
  const orm = await MikroORM.init(ormConfig);

  //Migrate up to the latest version on every start
  await orm.getMigrator().up();
  //Configure the GRAPHQL server
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [StockResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
  });
  await server.start();
  const app = express();
  server.applyMiddleware({ app });
  await new Promise(() => app.listen({ port: 4000 }));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

main().catch((err) => console.error(err));
