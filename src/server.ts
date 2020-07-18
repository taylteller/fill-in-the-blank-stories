import { ApolloServer } from "apollo-server-express"
import * as Express from "express"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import * as Mongoose from "mongoose"
import { StoryResolver } from "./StoryService/StoryResolver"

const main = async () => {
    require("dotenv").config(__dirname + ".env")

    const schema = await buildSchema({
        resolvers: [StoryResolver],
        emitSchemaFile: true,
        validate: false,
    });


    const PORT = process.env.PORT
    // const MONGO_USER = process.env.MONGODB_USER
    // const MONGO_PASS = process.env.MONGODB_PASS

    // create mongoose connection
    const mongoose = await Mongoose.connect(
        `mongodb://localhost:27017/test`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));

    const server = new ApolloServer({ schema });
    const app = Express();
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`server is running on PORT ${PORT}`)
    })
};

main().catch((error) => {
    console.log(error, 'error');
})