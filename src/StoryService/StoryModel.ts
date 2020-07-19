// import * as Mongoose from "mongoose"

// export interface Story extends Mongoose.Document {
//     story: String
//     blankWords: Array<String>
//     totalBlanks: Number
//     totalWords: Number
//     title: Date
//     dateCreated: String
// }

// const StorySchema: Mongoose.Schema = new Mongoose.Schema(
//     {
//         story: {
//             type: String,
//             required: true,
//         },
//         blankWords: {
//             type: Array,
//             required: true,
//         },
//         totalBlanks: {
//             type: Number,
//             required: true,
//         },
//         totalWords: {
//             type: Number,
//             required: true,
//         },
//         title: {
//             type: String,
//             required: true,
//         },
//         dateCreated: {
//             type: Date,
//             required: true,
//         },
//     },
//     { timestamps: true }
// )

// export default Mongoose.model<Story>("Story", StorySchema)

import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Story Model" })
export class Story {
    @Field(() => ID)
    id!: String;

    @Field()
    @Property()
    story!: String;

    @Field(_type => [String])
    @Property()
    blankWords!: String[];

    @Field(_type => Int)
    @Property()
    totalBlanks!: Number;

    @Field(_type => Int)
    totalWords!: Number;

    @Field()
    @Property()
    title!: String;

    @Field()
    @Property()
    dateCreated!: Date;
}

export const StoryModel = getModelForClass(Story);