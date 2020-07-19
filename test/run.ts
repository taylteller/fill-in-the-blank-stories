import { StoryResolver } from "../src/StoryService/StoryResolver"
import { graphql } from "graphql"
import { buildSchema } from "type-graphql"

export const runQuery = async (query: string, variables: any = {}) => {
  const schema = await buildSchema({
    resolvers: [StoryResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
  })

  return graphql(schema, query, null, {}, variables)
}