import { Story } from "../src/StoryService/StoryModel"

export const stories: Story[] = [
    {
        id: 1,
        story: "This is a test story.",
        blankWords: ["adjective", "adjective"],
        totalBlanks: 16,
        totalWords: 77,
        title: "Test story",
        dateCreated: new Date(1595162421000),
    },
    {
        id: 2,
        story: "This is a second test story.",
        blankWords: ["adjective", "verb", "verb"],
        totalBlanks: 20,
        totalWords: 84,
        title: "Other test story",
        dateCreated: new Date(1595180241000),
    },
    {
        id: 3,
        story: "This is a third test story.",
        blankWords: ["noun, singular"],
        totalBlanks: 17,
        totalWords: 65,
        title: "Other other test story",
        dateCreated: new Date(1595181317000),
    }
]