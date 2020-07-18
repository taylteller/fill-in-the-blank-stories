import { Field, ObjectType, ID, Int } from "type-graphql"

@ObjectType({ description: "Story Schema" })
export default class Story {

    @Field(() => ID)
    id!: String;

    @Field()
    story!: String;

    @Field(_type => [String])
    blankWords!: String[];

    @Field(_type => Int)
    totalBlanks!: Number;

    @Field(_type => Int)
    totalWords!: Number;

    @Field()
    title!: String;

    @Field()
    dateCreated!: Date;
}