// const db = require("./db")
const dbHandler = require('./dbHandler');
import { runQuery } from "./run"

describe("Register Mutation", () => {
    // beforeAll(db.connectToDB)

    // afterAll(db.disconnectDB)

    beforeAll(async () => await dbHandler.connect());
    afterAll(async () => {
        await dbHandler.clearDatabase();
        await dbHandler.closeDatabase();
    });

    const getRandomQuery = `
      query {
        getRandomStory {
            id
            title
            story
            blankWords
            totalBlanks
            totalWords
            dateCreated
        }
      }
      `

    it("run successfully", async () => {

        const response = await runQuery(getRandomQuery, {})
        const result = response.data!["getRandomStory"][0]
        expect(result).toHaveProperty("id")
        expect(result).toHaveProperty("title")
        expect(result).toHaveProperty("story")
        expect(result).toHaveProperty("blankWords")
        expect(result).toHaveProperty("totalBlanks")
        expect(result).toHaveProperty("totalWords")
        expect(result).toHaveProperty("dateCreated")
    })
})