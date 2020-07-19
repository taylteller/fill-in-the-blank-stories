import {
    Query,
    Resolver,
} from "type-graphql"
import { Story, StoryModel } from "./StoryModel"

@Resolver(_of => Story)

export class StoryResolver {
    @Query(_returns => [Story])
    async getRandomStory() {
        console.log("db response", await StoryModel.aggregate([{ $sample: { size: 1 } }]))
        return await StoryModel.aggregate([{ $sample: { size: 1 } }])
    }
}