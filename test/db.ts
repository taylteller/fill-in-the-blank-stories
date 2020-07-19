import * as mongoose from "mongoose"
import { StoryModel } from "../src/StoryService/StoryModel"
require("dotenv").config()

const models = {
    story: StoryModel,
}

export const cleanDB = async (cb: any) => {
    await models.story.deleteMany({})
    cb()
}

export const connectToDB = async () => {
    //   const MONGODB_USER = process.env.MONGODB_USER || "root"
    //   const MONGODB_PASSWORD = process.env.MONGODB_PASS || "password"
    const connection = await mongoose.connect(
        `mongodb://localhost:27017/storyBlanksApi`
    )
    return connection
}

export const disconnectDB = (cb = () => { }) => {
    mongoose.disconnect(cb)
}

export const generateMongooseId = () => {
    return mongoose.Types.ObjectId()
}