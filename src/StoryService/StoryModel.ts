import * as Mongoose from "mongoose"

export interface Story extends Mongoose.Document {
    story: String
    blankWords: Array<String>
    totalBlanks: Number
    totalWords: Number
    title: Date
    dateCreated: String
}

const StorySchema: Mongoose.Schema = new Mongoose.Schema(
    {
        story: {
            type: String,
            required: true,
        },
        blankWords: {
            type: Array,
            required: true,
        },
        totalBlanks: {
            type: Number,
            required: true,
        },
        totalWords: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        dateCreated: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
)

export default Mongoose.model<Story>("Story", StorySchema)