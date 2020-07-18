import {
    Query,
    Resolver,
} from "type-graphql"
import StorySchema from "./StorySchema"

@Resolver(_of => StorySchema)

export class StoryResolver {
    @Query(() => String)
    sample(): String {
        return "Hello"
    }

}