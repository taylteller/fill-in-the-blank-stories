const db = require("./db")
import { runQuery } from "./run"

describe("Register Mutation", () => {
    beforeAll(db.connectToDB)

    afterAll(db.disconnectDB)

    const getRandomQuery = `
  query {
    getRandomStory {
      title
    }
  }
  `

    it("run successfully", async () => {

        const response = await runQuery(getRandomQuery, {})

        expect(response).toMatchObject({
            data: {
                getRandomStory: [
                    {
                        title: "Plant Care",
                    }
                ]
            },
        })
    })
})