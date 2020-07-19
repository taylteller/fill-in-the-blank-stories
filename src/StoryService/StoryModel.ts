import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "Story Model" })
export class Story {
    @Field(() => ID)
    id!: Number;

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